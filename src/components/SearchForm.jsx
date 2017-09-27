import React, { Component } from 'react';

import '../scss/searchForm.scss';

export default class SearchForm extends Component {
    render() {
        return (
            <div className="search-wrapper">
                <h2>Find your movie</h2>
                <form>
                    <input type="text"/>
                    <button>search</button>

                    <div>
                        <span>Search by:</span>
                        <a href="#">title</a>&nbsp;
                        <a href="#">director</a>
                    </div>
                </form>
            </div>
        );
    }
}