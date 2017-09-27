import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import TextToDisplay from '../components/TextToDisplay.jsx';
import FilmsSorting from '../components/FilmsSorting.jsx';
import FilmsNotFound from '../components/FilmsNotFound.jsx';
import FilmsList from '../components/FilmsList.jsx';
import Footer from '../components/Footer.jsx';

export default class Search extends Component {
    render() {
        return (
            <div className="page page-search">
                <Header/>
                <main>
                    <TextToDisplay/>
                    <FilmsSorting/>
                    <FilmsList/>
                    <FilmsNotFound/>
                </main>
                <Footer/>
            </div>
        );
    }
}