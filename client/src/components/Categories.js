import React, { Component } from 'react';

export default class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <div className="categories-item">
          <h1>Udacity</h1>
        </div>
        <div className="categories-item">
          <h1>React</h1>
        </div>
        <div className="categories-item">
          <h1>Redux</h1>
        </div>
      </div>
    );
  }
}
