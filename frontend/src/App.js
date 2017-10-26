import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';
import { categoriesAPI, postsAPI } from './actions';
import PostForm from './components/PostForm';
import PostDetails from './components/PostDetails';

class App extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/" component={PostForm} />
          <Route exact path="/:category" component={PostList} />
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
