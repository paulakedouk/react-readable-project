import React from 'react';
import { Link } from 'react-router-dom';

export default function Post(props) {
  // console.log(props);
  return (
    <div className="post">
      <div>
        <h1>{props.post.title}</h1>
        <h2>
          Today by {props.post.author} in {props.post.category}
        </h2>
        <span>{props.post.body}</span>
        <div className="post-bottom">
          <div className="btn-like">
            <div>
              <i className="fa fa-thumbs-up" aria-hidden="true" />
              {props.post.voteScore}
            </div>
          </div>
          <div className="read-more">
            <Link to={`details/${props.post.postID}`}>
              <h2>Read More ></h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
