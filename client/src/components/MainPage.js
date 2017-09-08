import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCategories, getPostList } from '../actions';

import Categories from './Categories';
import PostList from './PostList';

class MainPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCategories());
    dispatch(getPostList());
  }

  render() {
    //const { categories } = this.props;

    return (
      <div className="header">
        <Link to="/">
          <h1 className="header-text">Readable</h1>
        </Link>
        <h3 className="header-text">
          Udacity Project by Paula Kedouk |
          <a href="https://github.com/paulakedouk/react-readable-project"> GitHub repository</a>
        </h3>
        <Categories />
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.categories,
    posts: state.posts
  };
};

export default connect(mapStateToProps)(MainPage);
