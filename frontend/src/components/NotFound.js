import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>This post has been deleted.</h1>
        <p>Sorry, there is nothing to see here.</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    );
  }
}
