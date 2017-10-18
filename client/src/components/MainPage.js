import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';
import Categories from './Categories';
import Post from './Post';

class MainPage extends Component {
  render() {
    const { category, post } = this.props;

    function loadPosts() {
      console.log(post);
      return post && post.map(post => <Post key={post.id} post={post} />);
    }

    return (
      <div className="header">
        <Header />

        <div className="categories">
          {category.map((category, index) => (
            <div key={index}>
              <Link to={category.path}>
                <Categories category={category} />
              </Link>
            </div>
          ))}
        </div>

        <div>
          <Link to="/">
            <h2 className="show-all">Show all</h2>
          </Link>
        </div>

        <div className="postlist-container">
          <div className="postlist-table">{post && post.map(post => <Post key={post.id} post={post} />)}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.category.categories,
    post: state.post.posts
  };
};

export default connect(mapStateToProps)(MainPage);
