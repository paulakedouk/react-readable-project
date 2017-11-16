import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentForm from './CommentForm';
import timeago from 'timeago.js';
import Modal from './Modal';
import * as actions from '../actions/comment';

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
    this.props.voteCommentAPI(this.props.comment.id, vote);
  };

  handleDelete = () => {
    this.props.deleteCommentAPI(this.props.comment.id);
  };

  render() {
    const { comment } = this.props;
    const date = timeago().format(comment.timestamp);
    return (
      <div>
        <div className="comments-item">
          <div className="edit-delete edit-delete-btn">
            <i className="fa fa-pencil" aria-hidden="true" onClick={this.toggleEdit} />
            <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete} />
          </div>
          <Modal show={this.state.edit} toggle={this.toggleEdit} onClose={this.toggleEdit}>
            <CommentForm edit comment={this.props.comment} onClose={this.toggleEdit} onDelete={this.handleDelete} />
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
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default connect(null, actions)(Comments);
