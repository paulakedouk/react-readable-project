import React from 'react';
import { Link } from 'react-router-dom';

export default function Post(props) {
  //console.log(props);
  return (
    <div className="post">
      <h1>{props.title}</h1>
      <h2>
        Today by {props.author} in {props.category}
      </h2>
      <span>{props.body}</span>
      <div className="post-bottom">
        <div className="btn-like">
          <div>
            <i className="fa fa-thumbs-up" aria-hidden="true" />
            {props.voteScore}
          </div>
        </div>
        <div className="read-more">
          <Link to={`details/${props.postID}`}>
            <h2>Read More ></h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
