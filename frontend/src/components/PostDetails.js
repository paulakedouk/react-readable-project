import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCommentsAPI, postAPI } from '../actions';
import Post from './Post';
import Comments from './Comments';
import CommentForm from './CommentForm';

class PostDetails extends Component {
  componentDidMount() {
    console.log(this.props.getPost);
    this.props.getPost(this.props.match.params.postId);
    this.props.getComments(this.props.match.params.postId);
  }

  handleDelete = () => {
    this.props.history.push('/');
  };

  render() {
    const { post } = this.props;

    return (
      <div>
        <div className="post-new">
          <div className="post-details">
            {post && <Post post={post} onDelete={this.handleDelete} />}

            <div className="post-details">
              <div className="comments">
                <h2>Comments</h2>
                {this.props.comments.map(comment => (
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
          )}
        </div>
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
  getComments: getCommentsAPI
})(PostDetails);
