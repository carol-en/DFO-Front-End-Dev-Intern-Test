import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './root.css';
import Header from './Header';
import Search from './Search';
import Content from './Content';
import Footer from './Footer';

class Root extends Component  {
    render() {
        return(
            <>
            <div className="container">
                <header className="has-background-grey-darker has-text-light">
                    <Header />
                    <Search />
                </header>

                <main>
                    <Content />
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