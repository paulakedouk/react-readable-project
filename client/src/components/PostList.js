import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="cel">
        <Post key={post.id} post={post} />
      </div>
    );
  }
}

export default PostList;
