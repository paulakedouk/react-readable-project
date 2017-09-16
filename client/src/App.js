import React from 'react';
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import MainPage from './components/MainPage';
import Post from './components/Post';
import Categories from './components/Categories';
import { categoriesAPI, postsAPI } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.categoriesAPI();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/page/:category" component={Categories} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  categoriesAPI: PropTypes.func,
  postsAPI: PropTypes.func
};

export default withRouter(
  connect(null, {
    categoriesAPI,
    postsAPI
  })(App)
);
