import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import MainPage from './components/MainPage';
import { categoriesAPI, postsAPI } from './actions';
import PostForm from './components/PostForm';
import PostDetails from './components/PostDetails';

class App extends React.Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/:category" component={MainPage} />
          <Route path="/:category/:postId" component={PostDetails} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  getCategories: PropTypes.func,
  getPosts: PropTypes.func
};

export default withRouter(
  connect(null, {
    getCategories: categoriesAPI,
    getPosts: postsAPI
  })(App)
);
