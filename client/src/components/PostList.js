import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from './Post';
import { getPosts } from '../actions';

class PostList extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="postlist-container">
        <div className="postlist-table">
          <div className="cel">
            <Post key={post.id} post={post} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
