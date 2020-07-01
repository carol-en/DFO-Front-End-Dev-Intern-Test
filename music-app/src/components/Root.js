import React, { Component } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import './root.css';
import Header from './Header';
import Search from './Search';
import Content from './Content';
import Footer from './Footer';

class Root extends Component  {
        state = {
            search_entry: "",
            artist: {
                search_name: "",
                search_image: "",
                search_albums: [],
                search_about: ""
            }
        }

        // Handles changing & updating search form input
        handleChange = (event) => {
            this.setState({ search_entry: event.target.value });
        }

        // Connects to API and searches database, returns information and updates state
        handleSubmit = (event) => {
            event.preventDefault();
            const artistSearch = this.state.search_entry.toLocaleLowerCase();


            axios.all([
                axios.post(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistSearch}`),
                axios.post(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artistSearch}`) ])
                .then(data => {
                    const { strArtist, strBiographyEN, strArtistThumb } = data[0].data.artists[0];
                    const foundAlbums = [];
                    data[1].data.album.map(album => foundAlbums.push(album.strAlbum));

                    this.setState({
                        search_entry: "",
                        artist: {
                            search_name: strArtist,
                            search_image: strArtistThumb,
                            search_albums: foundAlbums,
                            search_about: strBiographyEN
                        }
                    })
                    
                })
                .catch(error => console.log(error.message));
            
        }
    

    render() {
        return(
            <>
            <div className="container">
                <header className="has-background-grey-darker has-text-light">
                    <Header />
                    <Search artists={this.state} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                    />
                </header>

                <main>
                    {this.state.artist.search_name ?  
                        <Content artists={this.state.artist}/> : 
                        <h2 className="title is-1 empty-search-content">Search Artist!</h2> 
                    }
                </main>
            </div>
            
            <footer className="has-background-grey-darker">
                <Footer />
            </footer>
            </>
        )
    }
}

export default Root;