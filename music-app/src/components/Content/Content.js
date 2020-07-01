import React, { Component } from 'react';
import './content.css';

class Content extends Component  {
    render() {
        const foundArtists = this.props.artists;
        const albumsList = foundArtists.search_albums.map(album => <li>{album}</li>);

        return(
            <section className="main-content box">
                <h2 className="title is-1">{foundArtists.search_name}</h2>

                <article className="music-data content columns">

                    <div className="music-img column is-one-quarter">
                        <figure className="image artist-thumb">
                            <img src={foundArtists.search_image} alt={foundArtists.search_name} />
                        </figure>

                    </div>

                    <div className="albums column">
                        <h4 className="subtitle is-4 ">Albums</h4>
                        <ol className="album-list">
                            {albumsList}
                        </ol>
                    </div>
                </article>

                <article className="music-data content">
                <div className="music-about">
                    <h3 className="subtitle is-2">About</h3>
                        {foundArtists.search_about}
                </div>
                </article>
            </section>
        )
    }
}

export default Content;