import React, { Component } from 'react';

import Post from './Post';

export default class PostList extends Component {
  render() {
    return (
      <div className="postlist">
        <div className="postlist-item">
          <Post />
        </div>
        <div className="postlist-item">
          <Post />
        </div>
        <div className="postlist-item">
          <Post />
        </div>
        <div className="postlist-item">
          <Post />
        </div>
        <div className="postlist-item">
          <Post />
        </div>
        <div className="postlist-item">
          <Post />
        </div>
      </div>
    );
  }
}
