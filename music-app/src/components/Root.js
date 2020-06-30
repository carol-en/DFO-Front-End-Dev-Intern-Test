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
                <Header />
                <main>
                    <Search />
                    <Content />
                    <h4 className="title">Hello From Root!</h4>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
            </>
        )
    }
}

export default Root;