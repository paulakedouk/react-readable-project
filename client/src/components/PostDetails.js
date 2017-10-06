import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost, votePostAPI } from '../actions';
// import EditButtons from './EditButtons';
// import Comments from './Comments';
// import CommentsAdd from './CommentsAdd';

class PostDetails extends Component {
  render() {
    console.log(this.props);
    const { post } = this.props;
    return (
      <div>
        <Link to="/">
          <button className="btn-back">back</button>
        </Link>
        <h1>tetete</h1>
      </div>
    );
  }
}

export default PostDetails;
