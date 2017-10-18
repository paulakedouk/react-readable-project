import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <div>
          <h1>{post.title}</h1>
          <h2>
            Today by {post.author} in <Link to={`/${post.category}`}>{post.category}</Link>
          </h2>
          <span>{post.body}</span>
          <div className="post-bottom">
            <div className="btn-like">
              <div>
                <i className="fa fa-thumbs-up" aria-hidden="true" onClick={() => this.voteClicker('upVote')} />
                <i className="fa fa-thumbs-down" aria-hidden="true" onClick={() => this.voteClicker('downVote')} />
                <div className="counter">{post.voteScore}</div>
              </div>
            </div>
            <div className="read-more">
              <Link to={`${post.category}/${post.id}`}>
                <h2>Read More ></h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
