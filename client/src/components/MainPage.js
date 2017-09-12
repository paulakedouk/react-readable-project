import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { postsAPI, categoriesAPI } from '../actions';

import Categories from './Categories';
import PostList from './PostList';

class MainPage extends Component {
  componentDidMount() {
    if (this.props.match.params.category) {
      this.props.getPosts(this.props.match.params.category);
    } else {
      this.props.getPosts();
    }
  }

  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <div className="header">
        <Link to="/">
          <h1 className="header-text">Readable</h1>
        </Link>
        <h3 className="header-text">
          Udacity Project by Paula Kedouk |
          <a href="https://github.com/paulakedouk/react-readable-project"> GitHub repository</a>
        </h3>
        {this.props.posts.map(post => <PostList key={post.id} post={post} />)}
      </div>
    );
  }
}

MainPage.propTypes = {
  posts: PropTypes.array,
  getPosts: PropTypes.func,
  match: PropTypes.object,
  categories: PropTypes.array
};

const mapStateToProps = ({ post, category }) => {
  if (post.posts) {
    let posts = Object.keys(post.posts)
      .map(postId => post.posts[postId])
      .filter(post => post);

    return {
      posts
    };
  } else {
    return {
      posts: [],
      category: []
    };
  }
};

export default connect(mapStateToProps, {
  getPosts: postsAPI,
  getCategories: categoriesAPI
})(MainPage);
