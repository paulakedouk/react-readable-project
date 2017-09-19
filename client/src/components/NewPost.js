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
        <form className="new-post-form">
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

const mapStateToProps = ({ category }) => ({
  ...category
});

export default connect(mapStateToProps, {})(NewPost);
