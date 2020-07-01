import React, { Component } from 'react';
import './search.css';

class Search extends Component  {
    render() {
        const searchEntry = this.props.artists.search_entry,
        handleChange = this.props.handleChange,
        handleSubmit = this.props.handleSubmit;

        return(
            <section className="search-artists">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label title is-4" htmlFor="search_name">Search Artist!</label>
                        <div className="control">
                            <input value={searchEntry}  onChange={handleChange} id="search_name" className="input  is-large" type="text" placeholder="ex: Lady Gaga" required />
                        </div>
                    </div>
                    
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary is-large is-fullwidth is-rounded">Search</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Search;