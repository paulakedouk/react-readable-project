import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <div>
          <Link to="/udacity">Udacity</Link>
        </div>
        <div>
          <Link to="/react">React</Link>
        </div>
        <div>
          <Link to="/redux">Redux</Link>
        </div>
      </div>
    );
  }
}
