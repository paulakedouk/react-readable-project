import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsAPI, sortPost, DELETE_POST } from '../actions';
import { sort_by } from '../utils/helper';
import api from '../utils/api';
import Post from './Post';
import PostForm from './PostForm';

class PostList extends Component {
  componentDidMount() {
    if (this.props.match.params.category) {
      this.props.getPosts(this.props.match.params.category);
    } else {
      this.props.getPosts();
    }
  }

  handleDelete() {
    if (window.confirm('Delete Post?')) {
      const post_id = this.props.post.id;

      api.deletePost(post_id).then(() => {
        this.props.deletePost({
          type: DELETE_POST,
          post_id
        });
        this.props.history.push('/');
      });
    }
  }

  handleSort = (event, sort) => {
    let selectValue = event.target.value;
    this.props.sortPost({ sort: selectValue });
  };

  render() {
    const { posts } = this.props;
    const { category } = this.props.match.params;
    const categoryPosts = posts.filter(data => data.category === category);

    return (
      <div>
        <div className="sort-by">
          <label>
            <select type="select" name="sort" onChange={this.handleSort}>
              <option value="">Sort By</option>
              <option value="voteScore">Score: Low to high</option>
              <option value="-voteScore">Score: High to high</option>
              <option value="timestamp">Date: New to Old</option>
              <option value="-timestamp">Date: Old to New</option>
            </select>
          </label>
        </div>

        <div className="postlist-container">
          <div className="postlist-table">
            {!category ? (
              posts.map(post => <Post key={post.id} post={post} />)
            ) : (
              categoryPosts.map(post => (
                <Post
                  key={post.id}
                  post={post}
                  onDelete={() => {
                    this.deletePost();
                  }}
                />
              ))
            )}
          </div>
        </div>

        <div>
          <PostForm />
        </div>
      </div>
    );
  }
}

PostList.propTypes = {
  match: PropTypes.object,
  getPosts: PropTypes.func,
  sortPost: PropTypes.func,
  posts: PropTypes.array
};

const mapStateToProps = ({ post }) => {
  if (post.posts) {
    let posts = Object.keys(post.posts)
      .map(postId => post.posts[postId])
      .filter(post => post);
    if (post.sortBy) {
      posts.sort(sort_by(post.sortBy.sort));
      console.log(post.sortBy.sort);
    }
    return {
      posts
    };
  } else {
    return {
      posts: []
    };
  }
};

export default connect(mapStateToProps, {
  getPosts: postsAPI,
  sortPost: sortPost
})(PostList);
