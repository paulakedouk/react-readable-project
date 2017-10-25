import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentForm from './CommentForm';
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
    return (
      <div className="comments-item">
        <div className="edit-delete-btn">
          <button>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        <h3>Name</h3>
        <p>{comment.body}</p>

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
