import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class NewPost extends Component {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(createPost());
  // }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     title: '',
  //     author: '',
  //     category: '',
  //     text: ''
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({
  //     title: event.target.value,
  //     author: event.target.value,
  //     category: event.target.value,
  //     text: event.target.value
  //   });
  // }

  // handleSubmit(values) {
  //   this.props.createPost(values, () => {
  //     this.props.history.push('/');
  //   });
  // }

  render() {
    return (
      <div className="new-post">
        <h1>New Post</h1>
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              // value={this.state.value}
              // onChange={this.handleChange}
            />
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

function mapStateToProps(state) {
  return { categories: state.category };
}

export default connect(mapStateToProps, { addPost: createPost })(NewPost);
