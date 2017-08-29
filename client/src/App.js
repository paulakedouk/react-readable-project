import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Categories from './components/Categories';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <div className="main">
          <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/posts" component={Posts} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
