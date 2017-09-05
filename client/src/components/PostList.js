import React, { Component } from 'react';
import Post from './Post';

export default class PostList extends Component {
  render() {
    return (
      <div className="postlist-container">
        <div className="postlist-table">
          <div className="cel">
            <Post />
          </div>
          <div className="cel">
            <Post />
          </div>
          <div className="cel">
            <Post />
          </div>
          <div className="cel">
            <Post />
          </div>
          <div className="cel">
            <Post />
          </div>
          <div className="cel">
            <Post />
          </div>
        </div>
      </div>
    );
  }
}
