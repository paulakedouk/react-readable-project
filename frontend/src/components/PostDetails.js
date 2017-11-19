import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

  renderPostAndComments = (post, comments) => {
    if (typeof post === 'undefined') {
      return <div />;
    } else if (!post.hasOwnProperty('error') && JSON.stringify(post) !== '{}') {
      return (
        <div className="post-new">
          <div className="post-details">
            <Post key={post.id} post={post} onDelete={this.handleDelete} />
            <div className="post-details">
              <div className="comments">
                <h2>Comments</h2>
                {comments.map(comment => (
                  <div key={comment.id}>
                    <Comments comment={comment} />
                  </div>
                ))}
              </div>
              <div className="new-comment">
                <CommentForm parentId={this.props.match.params.postId} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <NotFound />;
    }
  };

  render() {
    const { post, comments } = this.props;
    return this.renderPostAndComments(post, comments);
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
