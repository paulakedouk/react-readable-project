import React from 'react';
import './App.scss';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from './components/MainPage';
import Post from './components/Post';
import PostDetails from './components/PostDetails';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/page/:category" component={Categories} />
          <Route exact path="/details/:postid" component={PostDetails} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
