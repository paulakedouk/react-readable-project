import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

// import EditButtons from './EditButtons';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <h1>The top 10 things to do in San Francisco 2017</h1>
        <h2>Today by Paula in Redux</h2>
        <span>
          Nonononononononononononononon ononononon ononononononononononononononono nonononononononononononononon
          onononononononononononononono nonononononononono…
        </span>
        <div className="post-bottom">
          <div className="btn-like">
            <div>
              <i className="fa fa-thumbs-up" aria-hidden="true" />0
            </div>
            <div>
              <i className="fa fa-thumbs-down" aria-hidden="true" />2
            </div>
          </div>
          <div className="read-more">
            <h2>Read More ></h2>
          </div>
        </div>
      </div>
    );
  }
}
