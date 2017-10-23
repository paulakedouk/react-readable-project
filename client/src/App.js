import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCategoriesAPI, getPostsAPI } from './actions';
import MainPage from './components/MainPage';
import PostDetails from './components/PostDetails';

class App extends React.Component {
  state = {
    posts: []
  };

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
          <Route path="/:category/:id" render={() => <PostDetails posts={this.state.posts} />} />
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
    getCategories: getCategoriesAPI,
    getPosts: getPostsAPI
  })(App)
);
