import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from './Modal';
import PostForm from './PostForm';
import timeago from 'timeago.js';

import { votePostAPI, deletePostAPI } from '../actions';

class Post extends Component {
  state = {
    edit: false,
    delete: false
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  toggleDelete = () => {
    this.setState({
      delete: !this.state.delete
    });
  };

  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    if (this.props.onDelete) {
      this.props.onDelete();
    }
  };

  handleVote = vote => {
    this.props.votePost(this.props.post.id, vote);
  };

  commentCounter = () => {
    const comments = this.props.post.comments;
    if (comments > 1) {
      return `${comments} comments`;
    }
    if (comments === 0 || comments === 1) {
      return `${comments} comment`;
    }
  };

  render() {
    const { post } = this.props;
    const date = timeago().format(post.timestamp);

    // Button
    const button = {
      backgroundColor: '#333848',
      color: 'white',
      margin: '20px 0 10px 0',
      height: '30px',
      minWidth: '100%',
      width: '100%',
      border: 'none'
    };

    console.log(this.props);
    return (
      <div>
        <div className="post">
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.toggleDelete}>Delete</button>
          <Link to={`${post.category}/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>

          <Modal show={this.state.edit} toggle={this.toggleEdit} onClose={this.toggleEdit}>
            <PostForm edit post={this.props.post} onClose={this.toggleEdit} />
          </Modal>

          <Modal show={this.state.delete} toggle={this.toggleDelete} onClose={this.toggleDelete}>
            <strong>Are you Sure?</strong> This cannot be undone.<br />
            <button style={button} onClick={this.handleDelete}>
              Delete this post
            </button>
          </Modal>
          <h2>
            {date} by {post.author} in <Link to={`/${post.category}`}>{post.category}</Link>
          </h2>
          <span>{post.body}</span>
          <div className="post-bottom">
            <div className="btn-like">
              <div>
                <i className="fa fa-thumbs-up" aria-hidden="true" onClick={() => this.handleVote('upVote')} />
                <i className="fa fa-thumbs-down" aria-hidden="true" onClick={() => this.handleVote('downVote')} />
                <div className="counter">{post.voteScore}</div>
              </div>
            </div>
            <div className="comment-counter">{this.commentCounter()}</div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  votePost: PropTypes.func,
  deletePost: PropTypes.func,
  onDelete: PropTypes.func
};

export default connect(null, {
  votePost: votePostAPI,
  deletePost: deletePostAPI
})(Post);
