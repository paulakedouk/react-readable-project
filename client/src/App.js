import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';

import Header from './components/Header';
import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Header />} />
        <div className="main">
          <Route exact path="/" render={() => <Categories />} />
        </div>
      </div>
    );
  }
}

export default App;
