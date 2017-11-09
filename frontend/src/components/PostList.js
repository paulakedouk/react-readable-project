import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsAPI, sortPost } from '../actions/post';
import { categoryPostAPI } from '../actions/category';
import { sort_by } from '../utils/helper';
import Post from './Post';
import PostForm from './PostForm';

class PostList extends Component {
  componentDidMount() {
    if (this.props.match.params.category) {
      this.props.categoryPostAPI();
    } else {
      this.props.postsAPI();
    }
  }

  handleSort = (event, sort) => {
    let selectValue = event.target.value;
    this.props.sortPost({ sort: selectValue });
  };

  render() {
    const { posts } = this.props;
    const { category } = this.props.match.params;
    const categoryPosts = posts.filter(data => data.category === category);
    const isDeleted = posts.filter(post => post.deleted !== true);

    return (
      <div className="mainpage">
        <div className="sort-by">
          <label>
            <select type="select" name="sort" onChange={this.handleSort}>
              <option value="">Sort By</option>
              <option value="voteScore">Score: Low to high</option>
              <option value="-voteScore">Score: High to high</option>
              <option value="-timestamp">Date: New to Old</option>
              <option value="+timestamp">Date: Old to New</option>
            </select>
          </label>
        </div>

        <div className="postlist-container">
          <div className="postlist-table">
            {!category
              ? isDeleted.map(post => <Post key={post.id} post={post} />)
              : categoryPosts.map(post => <Post key={post.id} post={post} />)}
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
  postsAPI: PropTypes.func,
  categoryPost: PropTypes.func,
  sortPost: PropTypes.func,
  posts: PropTypes.array
};

const mapStateToProps = ({ post }) => {
  if (post.posts) {
    let posts = Object.keys(post.posts)
      .map(postId => post.posts[postId])
      .filter(post => post);
    if (post.sortBy) {
      posts.sort(sort_by(post.sortBy.sort));
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
  postsAPI,
  sortPost,
  categoryPostAPI
})(PostList);
