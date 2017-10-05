import React, { Component } from 'react';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';

class PostForm extends Component {
  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });

    if (this.props.onCreatePost) {
      this.props.onCreatePost(values);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" id="title" name="title" placeholder="Title" />
            <label htmlFor="title" />
          </div>

          <div>
            <input type="text" id="author" name="author" placeholder="Author" />
            <label htmlFor="author" />
          </div>

          <div>
            <input type="text" id="category" name="category" placeholder="Category" />
            <label htmlFor="category" />
          </div>

          <div>
            <textarea id="post" name="description" placeholder="Text" />
            <label htmlFor="post" />
          </div>

          <input className="form-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
