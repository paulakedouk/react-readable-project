import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from './Modal';
import PostForm from './PostForm';
import timeago from 'timeago.js';

import * as actions from '../actions/post';

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
    this.props.deletePostAPI(this.props.post.id);
    if (this.props.onDelete) {
      this.props.onDelete();
    }
  };

  handleVote = vote => {
    this.props.votePostAPI(this.props.post.id, vote);
  };

  render() {
    const { post } = this.props;
    const date = timeago().format(post.timestamp);

    // Button style
    const button = {
      backgroundColor: '#333848',
      color: 'white',
      margin: '20px 0 10px 0',
      height: '30px',
      minWidth: '100%',
      width: '100%',
      border: 'none'
    };

    return (
      <div className="post-items">
        <div className="post">
          <div className="edit-delete">
            <i className="fa fa-pencil" aria-hidden="true" onClick={this.toggleEdit} />
            <i className="fa fa-trash" aria-hidden="true" onClick={this.toggleDelete} />
          </div>

          <Link to={`/category/${post.category}/${post.id}`}>
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
            {date} by {post.author} in <Link to={`/category/${post.category}`}>{post.category}</Link>
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
            <div className="comment-counter">{post.commentCount} comments</div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  votePostAPI: PropTypes.func,
  deletePostAPI: PropTypes.func,
  onDelete: PropTypes.func
};

export default connect(null, actions)(Post);
