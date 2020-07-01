import React, { Component } from 'react';
import './content.css';

class Content extends Component  {
    render() {
        const foundArtists = this.props.artists;
        const albumsList = foundArtists.search_albums.map((album, i) => <li key={i}>{album}</li>);

        return(
            <section className="main-content box">
                <h2 className="title is-1">{foundArtists.search_name}</h2>

                <article className="music-data content columns">
                    <div className="music-sidebar column is-one-quarter">
                        <figure className="image artist-thumb">
                            <img src={foundArtists.search_image} alt={foundArtists.search_name} />
                        </figure>

                        <h4 className="subtitle is-4 ">Albums</h4>
                        <ol className="album-list ">
                            {albumsList}
                        </ol>

                    </div>
    
                <div className="music-about column">
                    <h3 className="subtitle is-2">About</h3>
                        {foundArtists.search_about}
                </div>
                </article>
            </section>
        )
    }
}

export default Content;