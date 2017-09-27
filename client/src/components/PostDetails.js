import React, { Component } from 'react';

// import EditButtons from './EditButtons';
// import Comments from './Comments';
// import CommentsAdd from './CommentsAdd';
import { Link } from 'react-router-dom';

export default class PostDetails extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button className="btn-back">back</button>
        </Link>
        <h1>Post Details</h1>
      </div>
    );
  }
}
