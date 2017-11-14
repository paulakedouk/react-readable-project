import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions/comment';

class CommentForm extends Component {
  state = {
    author: '',
    body: '',
    hasError: false
  };

  componentDidMount() {
    if (this.props.comment) {
      const { author, body } = this.props.comment;
      this.setState({
        author,
        body
      });
    }
  }

  validateForm = () => {
    const { author, body } = this.state;
    return author !== '' && body !== '';
  };

  handleReset = () => {
    this.setState({
      author: '',
      body: '',
      hasError: false
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      let { hasError, ...comment } = this.state;
      if (this.props.edit) {
        this.props.editCommentAPI(this.props.comment.id, comment);
        this.props.onClose();
      } else {
        comment.parentId = this.props.parentId;
        this.props.addCommentAPI(comment);
      }
      this.handleReset();
    } else {
      this.setState({
        hasError: true
      });
    }
  };

  render() {
    return (
      <div>
        <div className="new-comment">
          <h2>New comment</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.state.hasError && (
            <p className="new-post-error">
              <strong>Try again!</strong> You have to complete all fields.
            </p>
          )}
          <div>
            <label htmlFor="author" />
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Name"
              value={this.state.author}
              onChange={this.handleChange}
              readOnly={this.props.edit}
            />

            <label htmlFor="body" />
            <input
              type="textarea"
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.handleChange}
              placeholder="Your Comment"
            />

            <input className="form-btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  parentId: PropTypes.string,
  edit: PropTypes.bool,
  editCommentAPI: PropTypes.func,
  onClose: PropTypes.func,
  comment: PropTypes.object,
  addCommentAPI: PropTypes.func
};

export default connect(null, actions)(CommentForm);
