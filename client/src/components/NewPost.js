import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NewPost extends Component {
  state = {
    author: '',
    title: '',
    category: '',
    body: ''
  };

  componentDidMount() {
    if (this.props.post) {
      const { title, author, category, body } = this.props.post;
      this.setState({
        title,
        author,
        category,
        body
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="new-post">
        <h1>New Post</h1>
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <div className="form-title">
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
            <label for="title">Title</label>
          </div>

          <div className="form-author">
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-category">
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-body">
            <input
              type="textarea"
              id="body"
              name="body"
              placeholder="Text"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-btn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ category }) => ({
  ...category
});

export default connect(mapStateToProps, {})(NewPost);
