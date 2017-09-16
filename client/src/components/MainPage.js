import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { postsAPI, categoriesAPI } from '../actions';

import Categories from './Categories';
import Post from './Post';

class MainPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(categoriesAPI());
    dispatch(postsAPI());
  }

  render() {
    const { category, post } = this.props;

    const categoriesList = category.categories.map((category, index) => {
      return <Categories key={index} title={category.name} />;
    });

    const postList = post.posts.map(data => {
      return <Post key={data.id} {...data} />;
    });

    return (
      <div className="header">
        <Link to="/">
          <h1 className="header-text">Readable</h1>
        </Link>
        <h3 className="header-text">
          Udacity Project by Paula Kedouk |
          <a href="https://github.com/paulakedouk/react-readable-project"> GitHub repository</a>
        </h3>

        <div>
          <div className="categories"> {categoriesList}</div>
          <div className="postlist-container">
            <div className="postlist-table">{postList}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { category, post } = state;
  return {
    category,
    post
  };
};

export default connect(mapStateToProps)(MainPage);
