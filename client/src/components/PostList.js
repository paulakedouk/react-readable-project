import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { postsAPI, sortPost } from '../actions';
import { sort_by } from '../utils/helper';
import Post from './Post';
import PostForm from './PostForm';

class PostList extends Component {
  componentDidMount() {
    if (this.props.match.params.category) {
      this.props.getPosts(this.props.match.params.category);
    } else {
      this.props.getPosts();
    }
  }

  handleSort = sort => {
    this.props.sortPost(sort);
  };

  render() {
    const { posts } = this.props;
    const { category } = this.props.match.params;
    const categoryPosts = posts.filter(data => data.category === category);

    return (
      <div>
        <div className="sort-by">
          <label>
            <select>
              <option defaultValue>Sort By:</option>
              <option onClick={() => this.handleSort('timestamp')}>Date: Old to New</option>
              <option onClick={() => this.handleSort('-timestamp')}>Date: New to Old</option>
              <option onClick={() => this.handleSort('-voteScore')}>Score: High to Low</option>
              <option onClick={() => this.handleSort('voteScore')}>Score: Low to High</option>
            </select>
          </label>
        </div>

        <div className="postlist-container">
          <div className="postlist-table">
            {!category ? (
              posts.map(post => <Post key={post.id} post={post} />)
            ) : (
              categoryPosts.map(post => <Post key={post.id} post={post} />)
            )}
          </div>
        </div>

        <div>
          <PostForm />
        </div>
      </div>
    );
  }
}

PostList.propTypes = {
  match: PropTypes.object,
  getPosts: PropTypes.func,
  sortPost: PropTypes.func,
  posts: PropTypes.array
};

const mapStateToProps = ({ post }) => {
  // console.log(post.posts);
  if (post.posts) {
    let posts = Object.keys(post.posts)
      .map(postId => post.posts[postId])
      .filter(post => post);
    if (post.sortBy) {
      console.log(post.sortBy);
      posts.sort(sort_by(post.sortBy));
    }
    return {
      posts
    };
  } else {
    return {
      posts: []
    };
  }
};

export default connect(mapStateToProps, {
  getPosts: postsAPI,
  sortPost: sortPost
})(PostList);
