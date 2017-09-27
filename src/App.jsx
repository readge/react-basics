import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Search from './pages/Search.jsx';
import Film from './pages/Film.jsx';

import './scss/app.scss';

class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Search/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));