import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { commentsAPI } from '../actions/comment';
import { postAPI } from '../actions/post';
import Post from './Post';
import Comments from './Comments';
import CommentForm from './CommentForm';
import NotFound from './NotFound';

class PostDetails extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
    this.props.getComments(this.props.match.params.postId);
  }

  handleDelete = () => {
    this.props.history.push('/');
  };

  render() {
    const { post, comments } = this.props;
    // console.log(this.props);
    const commentsMap = comments.map(comment => (
      <div key={comment.id}>
        <Comments comment={comment} />
      </div>
    ));

    return (
      <div>
        {typeof post !== 'undefined' ? (
          <div className="post-new">
            <div className="post-details">
              {post && <Post key={post.id} post={post} onDelete={this.handleDelete} />}

              <div className="post-details">
                <div className="comments">
                  <h2>Comments</h2>
                  {post ? commentsMap : <p>No comments yet.</p>}
                </div>
                <div className="new-comment">
                  <CommentForm id={this.props.match.params.postId} />
                </div>
              </div>
            </div>
            )}
          </div>
        ) : (
          <Redirect to="/notfound" />
        )}
      </div>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.object,
  getPost: PropTypes.func,
  getComments: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  comments: PropTypes.array
};

PostDetails.defaultProps = {
  comments: []
};

const mapStateToProps = ({ post, comment }) => {
  let props = {};
  if (post.posts) {
    props.post = post.posts[Object.keys(post.posts)[0]];
  }
  if (comment.comments) {
    props.comments = Object.keys(comment.comments)
      .map(commentId => comment.comments[commentId])
      .filter(comment => comment);
  }
  return props;
};

export default connect(mapStateToProps, {
  getPost: postAPI,
  getComments: commentsAPI
})(PostDetails);
