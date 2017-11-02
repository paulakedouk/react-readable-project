import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1 className="header-text">Readable</h1>
        </Link>
        <h3 className="header-text">
          Udacity Project by Paula Kedouk |
          <a href="http://anapaula.io"> anapaula.io</a>
        </h3>
      </div>
    );
  }
}
