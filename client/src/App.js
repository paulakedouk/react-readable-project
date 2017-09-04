import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Categories from './components/Categories';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <div>
            <Route exact path="/" component={Header} className="header" />
            <Categories />
            <PostList />
          </div>
          <div className="main">
            <Route exact path="/category/:post_id" component={PostDetails} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
