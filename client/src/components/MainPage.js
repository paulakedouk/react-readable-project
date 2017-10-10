import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

import Categories from './Categories';
import Post from './Post';
import PostForm from './PostForm';

class MainPage extends Component {
  state = {
    posts: []
  };

  constructor() {
    super();
    this.createPost = this.createPost.bind(this);
  }

  createPost = posts => {
    this.props.dispatch(createPost(posts));
  };

  render() {
    const { categories, posts } = this.props;
    const { category } = this.props.match.params;
    const categoryPosts = posts.filter(data => data.category === category);

    function loadCategory() {
      if (!categories.path) {
        return categories.map((category, index) => (
          <div key={index}>
            <Link to={category.path}>
              <Categories category={category} />
            </Link>
          </div>
        ));
      }
    }

    return (
      <div className="header">
        <Link to="/">
          <h1 className="header-text">Readable</h1>
        </Link>
        <h3 className="header-text">
          Udacity Project by Paula Kedouk |
          <a href="https://github.com/paulakedouk/react-readable-project"> GitHub repository</a>
        </h3>

        <div className="categories">{loadCategory()}</div>
        <div>
          <Link to="/">
            <h2 className="show-all">Show all</h2>
          </Link>
        </div>

        <div className="postlist-container">
          <div className="postlist-table">
            {!this.props.match.params.category ? (
              posts.map(post => <Post key={post.id} post={post} />)
            ) : (
              categoryPosts.map(post => <Post key={post.id} post={post} />)
            )}
          </div>
        </div>
        <div className="new-post">
          <h1>New Post</h1>

          <PostForm categories={this.props.categories} {...posts} onCreatePost={this.createPost} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(MainPage);
