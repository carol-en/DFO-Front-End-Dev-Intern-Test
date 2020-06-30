import React, { Component } from 'react';
import './search.css';

class Search extends Component  {
    render() {
        return(
            <section className="search-artists">
                <form>
                    <div className="field">
                        <label className="label title is-4">Search Artist!</label>
                        <div className="control">
                            <input className="input  is-large" type="text" placeholder="ex: Lady Gaga" required />
                        </div>
                    </div>
                    
                    <div className="field">
                        <div class="control">
                            <button class="button is-primary is-large is-fullwidth is-rounded">Search</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Search;