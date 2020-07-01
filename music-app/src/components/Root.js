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

        componentDidMount() {
            axios('https://www.themealdb.com/api/json/v2/9973533/latest.php')
                // .then(data => console.log(data))
                .catch(error => console.log(error));
        }

        handleChange = (event) => {
            this.setState({ search_entry: event.target.value });
        }

        handleSubmit = (event) => {
            event.preventDefault();
            const artistSearch = this.state.search_entry.toLocaleLowerCase();
            // 9973533
            axios(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistSearch}`)
                .then(data => {
                    const { strArtist, strBiographyEN, strArtistThumb } = data.data.artists[0];
                    
                    // console.log(data);

                    this.setState({
                        search_entry: "",
                        artist: {
                            search_name: strArtist,
                            search_image: strArtistThumb,
                            search_albums: ["Saab", "Volvo", "BMW"],
                            search_about: strBiographyEN
                        }
                    });
                })
                .catch(error => console.log(error.message));
            
        }
    

    render() {
        return(
            <>
            <div className="container">
                <header className="has-background-grey-darker has-text-light">
                    <Header />
                    <Search artists={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </header>

                <main>
                    {this.state.artist.search_name ?  <Content artists={this.state.artist}/> : <h2 className="title is-1 empty-search-content">Search Artist!</h2> }
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