import React, { Component } from 'react';
import Header from './Header';

export default class MainPage extends Component {
  render() {
    return (
      <div className="header">
        <Header />

        <div className="categories">Categories</div>
      </div>
    );
  }
}
