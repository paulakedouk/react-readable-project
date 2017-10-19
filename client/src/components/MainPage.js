import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';
import Categories from './Categories';
import Post from './Post';

class MainPage extends Component {
  render() {
    const { categoryReducer, postReducer } = this.props;
    const { category } = this.props.match.params;
    const categoryPosts = postReducer && postReducer.filter(data => data.category === category);

    function loadCategory() {
      if (!categoryReducer.path) {
        return categoryReducer.map((cat, index) => (
          <div key={index}>
            <Link to={cat.path}>
              <Categories category={cat} />
            </Link>
          </div>
        ));
      }
    }

    return (
      <div className="header">
        <Header />

        <div className="categories">{loadCategory()}</div>

        <div>
          <Link to="/">
            <h2 className="show-all">Show all</h2>
          </Link>
        </div>

        <div className="postlist-container">
          <div className="postlist-table">
            {!this.props.match.params.category ? (
              postReducer && postReducer.map(post => <Post key={post.id} post={post} />)
            ) : (
              categoryPosts && categoryPosts.map(post => <Post key={post.id} post={post} />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryReducer: state.categoryReducer.categories,
    postReducer: state.postReducer.posts
  };
};

export default connect(mapStateToProps)(MainPage);
