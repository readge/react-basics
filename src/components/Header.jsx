import React, { Component } from 'react';

import Logo from './Logo.jsx';
import SearchForm from './SearchForm.jsx';

import '../scss/header.scss';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Logo/>
                <SearchForm/>
            </header>
        );
    }
}