import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>Readable</h1>
        </Link>
        <h3>
          Udacity Project by Paula Kedouk |
          <a href="https://github.com/paulakedouk/react-readable-project"> GitHub repository</a>
        </h3>
      </div>
    );
  }
}
