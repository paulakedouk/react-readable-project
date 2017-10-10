import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Select category'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true });

    if (this.props.onCreatePost) {
      this.props.onCreatePost(values);
    }
  };

  render() {
    // console.log(this.props);

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
            <label htmlFor="category">
              <select id="category" name="category" value={this.state.value} onChange={this.handleChange}>
                <option value="select">Select category</option>
                {this.props.categories.map(category => (
                  <option key={category.path} value={category.path}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div>
            <textarea id="body" name="body" placeholder="Text" />
            <label htmlFor="body" />
          </div>

          <input className="form-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
