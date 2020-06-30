import React, { Component } from 'react';
import './header.css';

class Header extends Component  {
    render() {
        return(
            <section className="hero">
                <h1 className="mb-2 is-size-1 title has-text-primary has-background-grey-darker">
                    Musi - Call
                </h1>
            </section>
        )
    }
}

export default Header;