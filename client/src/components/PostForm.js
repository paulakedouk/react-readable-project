import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm = () => {
    this.setState({
      title: '',
      author: '',
      category: '',
      body: ''
    });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //   validateForm = () => {
  //     const { title, author, category, body } = this.state;
  //     return title !== '' && author !== '' && category !== '' && body !== '';
  //   };

  handleSubmit = event => {
    event.preventDefault();

    const values = serializeForm(event.target, { hash: true });

    if (this.props.onCreatePost) {
      this.props.onCreatePost(values);
      this.clearForm();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            />
            <label htmlFor="author" />
          </div>

          <div>
            <label htmlFor="category">
              <select id="category" name="category" value={this.state.category} onChange={this.handleChange}>
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
            <textarea id="body" name="body" placeholder="Text" value={this.state.body} onChange={this.handleChange} />
            <label htmlFor="body" />
          </div>

          <input className="form-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
