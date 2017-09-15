import React, { Component } from 'react';
// import '../../node_modules/font-awesome/css/font-awesome.min.css';

import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getCategories } from '../actions';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <h1>{post.title}</h1>
        <h2>
          Today by {post.author} in {post.category}
        </h2>
        <span>{post.body}</span>
        <div className="post-bottom">
          <div className="btn-like">
            <div>
              <i className="fa fa-thumbs-up" aria-hidden="true" />
              {post.voteScore}
            </div>
          </div>
          <div className="read-more">
            <Link to="/post">
              <h2>Read More ></h2>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
