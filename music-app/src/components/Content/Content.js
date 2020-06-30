import React, { Component } from 'react';
import './content.css';

class Content extends Component  {
    render() {
        return(
            <section className="main-content">
                <h2 className="title is-1">Artist/Band Name</h2>

                <article className="music-data content columns box">

                    <div className="music-img column  is-one-fifth">
                        <figure className="image is-square">
                            <img src="https://i.imgur.com/gX1WzV0.jpeg" alt="Band Name" />
                        </figure>

                    </div>

                    <div className="albums column is-one-quarter">
                        <h3 className="subtitle is-4 ">Albums</h3>
                        <ol className="album-list">
                            <li>lorkejwfnesjfkrejgkrjek</li>
                            <li>lorkejwfnesjfkrejgkrjek</li>
                            <li>lorkejwfnesjfkrejgkrjek</li>
                            <li>lorkejwfnesjfkrejgkrjek</li>
                            <li>lorkejwfnesjfkrejgkrjek</li>
                            <li>lorkejwfnesjfkrejgkrjek</li>
                        </ol>
                    </div>

                    <div className="music-about column">

                        <h3 className="subtitle is-4">About</h3>

                        <p>
                            <a href="#">Link </a> 
                            Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.Curabitur accumsan turpis pharetra augue tincidunt blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                        </p>
                    </div>
                </article>
            </section>
        )
    }
}

export default Content;