import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import { commentsAPI, createComment } from '../actions';

class PostDetails extends Component {
  state = {
    author: '',
    body: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { ...commentReducer } = this.state;
    console.log(this.props);
    commentReducer.parentId = this.props.parentId;
    this.props.createComment(commentReducer);
  };

  handleVote = vote => {
    this.props.voteComment(this.props.comment.id, vote);
  };

  render() {
    const post = this.props;
    return (
      <div>
        <Header />
        <div className="post-details">
          <div className="back-btn">
            <Link to="/">Back</Link>
          </div>
          <h1>{post.title}</h1>
          <h2>
            {post.author +
              ' - ' +
              new Date(post.timestamp).toLocaleDateString() +
              ', ' +
              new Date(post.timestamp).toLocaleTimeString()}
          </h2>
          <h2>Today by AUTHOR in CATEGORY</h2>
          <p>{post.body}</p>
          <div className="btn-like">
            <i className="fa fa-thumbs-up" aria-hidden="true" />
            <i className="fa fa-thumbs-down" aria-hidden="true" />
            <div className="counter">10</div>
          </div>
          <div className="comments">
            <h2>Comments</h2>
            <div className="comments-item">
              <div className="edit-delete-btn">
                <button>Edit</button>
                <button>Delete</button>
              </div>
              <h3>Name</h3>
              <p>{this.createComment}</p>

              <div className="btn-like">
                <i className="fa fa-thumbs-up" aria-hidden="true" />
                <i className="fa fa-thumbs-down" aria-hidden="true" />
                <div className="counter">{post.voteScore}</div>
              </div>
            </div>
          </div>
          <div className="new-comment">
            <form onSubmit={this.handleSubmit}>
              <h2>New Comment</h2>
              <div>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Name"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="body"
                  name="body"
                  placeholder="Comment"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
              </div>
              <input className="form-btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    commentReducer: state.commentReducer.categories
  };
};

export default connect(mapStateToProps)(PostDetails);
