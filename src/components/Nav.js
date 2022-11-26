import React, { Component } from 'react';

export class Nav extends Component {

    render () {
        return (
            <div className="row" id="nav-row">
            <div className="col-4 offset-4">
                <h1>Strings</h1>
            </div>
            <div className="col-4" id="logout-column">
                <button className="btn btn-danger">Logout</button>
            </div>
        </div>
        );
    }
}