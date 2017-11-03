import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/post';

class PostForm extends Component {
  state = {
    author: '',
    title: '',
    category: '',
    body: '',
    error: false
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

  validate = () => {
    const { title, author, category, body } = this.state;
    return title !== '' && author !== '' && category !== '' && body !== '';
  };

  handleSubmit = event => {
    event.preventDefault();

    const { error, ...post } = this.state;

    if (this.validate()) {
      if (this.props.edit) {
        this.props.editPostAPI(this.props.post.id, post);
        this.props.onClose();
      } else {
        this.props.addPostAPI(post);
      }
      this.handleReset();
    } else {
      this.setState({
        error: true
      });
    }
  };

  handleReset = () => {
    this.setState({
      author: '',
      title: '',
      category: '',
      body: ''
    });
  };

  render() {
    return (
      <div className="new-post-form">
        <div className="new-post">{this.props.edit ? <h1>Edit Post</h1> : <h1>New Post</h1>}</div>
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <p className="new-post-error">
              <strong>Try again!</strong> You have to complete all fields.
            </p>
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
                {this.props.categories.map(cat => (
                  <option key={cat.path} value={cat.name}>
                    {cat.name}
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
  addPostAPI: PropTypes.func,
  editPostAPI: PropTypes.func,
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

export default connect(mapStateToProps, actions)(PostForm);
