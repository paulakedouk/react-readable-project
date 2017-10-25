import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { capitalize } from '../utils/helper';
import { addPostAPI, editPostAPI } from '../actions';

class PostForm extends Component {
  state = {
    author: '',
    title: '',
    category: '',
    body: '',
    hasError: false
  };

  componentDidMount() {
    if (this.props.post) {
      const { author, title, category, body } = this.props.post;
      this.setState({
        author,
        title,
        category,
        body
      });
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  validateForm = () => {
    const { author, title, category, body } = this.state;
    return author !== '' && title !== '' && category !== '' && body !== '';
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      const { hasError, ...post } = this.state;
      if (this.props.edit) {
        this.props.editPost(this.props.post.id, post);
        this.props.onClose();
      } else {
        this.props.addPost(post);
      }
    } else {
      this.setState({
        hasError: true
      });
    }
  };

  render() {
    // console.log(this.props);

    const editForm = {
      backgroundColor: '#dff3ec',
      borderRadius: '5px',
      maxWidth: '500px',
      minHeight: '150px',
      margin: '100px auto',
      /* padding: '30px' */
      textAlign: 'center'
    };

    return (
      <div>
        <div className="new-post">{this.props.edit ? <h1>Edit Post</h1> : <h1>New Post</h1>}</div>
        <form onSubmit={this.handleSubmit}>
          {this.state.hasError && (
            <h1>
              <strong>Try again!</strong> You have to complete all fields.
            </h1>
          )}
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor="title" />
          </div>

          <div>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleChange}
              readOnly={this.props.edit}
            />
            <label htmlFor="author" />
          </div>

          <div>
            <label htmlFor="category">
              <select
                id="category"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                readOnly={this.props.edit}
              >
                <option value="select">Select category</option>
                {this.props.categories.map(category => (
                  <option key={category} value={category}>
                    {capitalize(category)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div>
            <textarea name="body" id="body" placeholder="Text" value={this.state.body} onChange={this.handleChange} />
            <label htmlFor="body" />
          </div>

          <input className="form-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  categories: PropTypes.array,
  edit: PropTypes.bool,
  addPost: PropTypes.func,
  editPost: PropTypes.func,
  onClose: PropTypes.func,
  post: PropTypes.object,
  history: PropTypes.object
};

PostForm.defaultProps = {
  categories: []
};

const mapStateToProps = ({ category }) => ({
  ...category
});

export default connect(mapStateToProps, {
  addPost: addPostAPI,
  editPost: editPostAPI
})(PostForm);
