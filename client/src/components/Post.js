import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from './Modal';
import PostForm from './PostForm';

import { votePostAPI, deletePostAPI } from '../actions';

class Post extends Component {
  state = {
    edit: false
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  // toggleEdit = () => {
  //   this.setState({
  //     edit: !this.state.edit
  //   });
  // };

  // toggleDelete = () => {
  //   this.setState({
  //     delete: !this.state.delete
  //   });
  // };

  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    if (this.props.onDelete) {
      this.props.onDelete();
    }
  };

  handleVote = vote => {
    this.props.votePost(this.props.post.id, vote);
  };

  commentCount = () => {
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
    return (
      <div>
        <div className="post">
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.toggleDelete}>Delete</button>
          <h1>{post.title}</h1>

          <Modal show={this.state.edit} onClose={this.toggleEdit}>
            <PostForm edit post={this.props.post} />
          </Modal>
          <h2>
            {post.timestamp} by {post.author} in <Link to={`/${post.category}`}>{post.category}</Link>
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
