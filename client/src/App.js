import React from 'react';
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from './components/MainPage';
import PostList from './components/PostList';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/page/:category" component={Categories} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
