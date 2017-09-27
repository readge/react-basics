import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import FilmsPreview from '../components/FilmsPreview.jsx';
import TextToDisplay from '../components/TextToDisplay.jsx';
import FilmsSorting from '../components/FilmsSorting.jsx';
import FilmsList from '../components/FilmsList.jsx';
import Footer from '../components/Footer.jsx';

export default class Film extends Component {
    render() {
        return (
            <div className="page page-film">
                <Header/>
                <main>
                    <FilmsPreview/>
                    <TextToDisplay/>
                    <FilmsList/>
                </main>
                <Footer/>
            </div>
        );
    }
}