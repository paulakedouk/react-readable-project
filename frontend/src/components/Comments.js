import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentForm from './CommentForm';
import timeago from 'timeago.js';
import Modal from './Modal';
import { voteCommentAPI, deleteCommentAPI } from '../actions';

class Comments extends Component {
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

  handleVote = vote => {
    this.props.voteComment(this.props.comment.id, vote);
  };

  handleDelete = () => {
    this.props.deleteComment(this.props.comment.id);
  };

  render() {
    const { comment } = this.props;
    const date = timeago().format(comment.timestamp);

    return (
      <div className="comments-item">
        <div className="edit-delete-btn">
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <Modal show={this.state.edit} toggle={this.toggleEdit} onClose={this.toggleEdit}>
          <CommentForm edit comment={this.props.comment} onClose={this.toggleEdit} />
        </Modal>

        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <p className="comment-date">{date}</p>

        <div className="btn-like">
          <i className="fa fa-thumbs-up" aria-hidden="true" onClick={() => this.handleVote('upVote')} />
          <i className="fa fa-thumbs-down" aria-hidden="true" onClick={() => this.handleVote('downVote')} />
          <div className="counter">{comment.voteScore}</div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default connect(null, {
  voteComment: voteCommentAPI,
  deleteComment: deleteCommentAPI
})(Comments);
