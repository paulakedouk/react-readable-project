import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.post.voteScore
    };
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  countDown = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    // console.log(this.props);
    const { post } = this.props;
    return (
      <div className="post">
        <div>
          <h1>{post.title}</h1>
          <h2>
            Today by {post.author} in <Link to={`/${post.category}`}>{post.category}</Link>
          </h2>
          <span>{post.body}</span>
          <div className="post-bottom">
            <div className="btn-like">
              <div>
                <i className="fa fa-thumbs-up" aria-hidden="true" onClick={this.countUp} />
                <i className="fa fa-thumbs-down" aria-hidden="true" onClick={this.countDown} />
                <div className="counter">{this.state.count}</div>
              </div>
            </div>
            <div className="read-more">
              <Link to={`details/${post.id}`}>
                <h2>Read More ></h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
