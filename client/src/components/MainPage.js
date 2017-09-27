import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postsAPI, categoriesAPI } from '../actions';
// import _ from 'lodash';
import Categories from './Categories';
import Post from './Post';
import NewPost from './NewPost';

class MainPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(categoriesAPI());
    dispatch(postsAPI());
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log('on route change');
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    // console.log(this.props);
    let { categories, posts } = this.props;

    function loadCategory() {
      if (!categories.path) {
        return categories.map((category, index) => (
          <div key={index}>
            <Link to={category.path}>
              <Categories category={category} />
            </Link>
          </div>
        ));
      }
    }

    function loadPost() {
      // console.log(posts);
      if (!posts.path) {
        return posts.map(post => <Post post={post} key={post.id} />);
      } else {
        posts.filter(post => {
          return console.log('rest');
        });
      }
    }

    return (
      <div className="header">
        <Link to="/">
          <h1 className="header-text">Readable</h1>
        </Link>
        <h3 className="header-text">
          Udacity Project by Paula Kedouk |
          <a href="https://github.com/paulakedouk/react-readable-project"> GitHub repository</a>
        </h3>

        <div className="categories">{loadCategory()}</div>

        <div className="postlist-container">
          <div className="postlist-table">{loadPost()}</div>
        </div>
        <div className="new-post">
          <NewPost />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    categories: state.categories.categories,
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(MainPage);
