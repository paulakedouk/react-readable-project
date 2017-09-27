import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postsAPI, categoriesAPI } from '../actions';
// import _ from 'lodash';
import Categories from './Categories';
import Post from './Post';
import NewPost from './NewPost';

class MainPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(categoriesAPI());
    dispatch(postsAPI());
  }

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
          <NewPost />
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
