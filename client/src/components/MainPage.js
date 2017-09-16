import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import createFragment from 'react-addons-create-fragment';
import { postsAPI, categoriesAPI } from '../actions';

import Categories from './Categories';
import Post from './Post';

class MainPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(categoriesAPI());
  }

  render() {
    const { category } = this.props;
    const categoriesList = category.categories.map((category, index) => {
      return <Categories title={category.name} />;
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
        {category ? <div className="categories"> {createFragment({ categoriesList })}</div> : <p>error</p>}
        <div className="postlist-container">
          <div className="postlist-table">post</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { category } = state;
  return {
    category
  };
};

export default connect(mapStateToProps)(MainPage);
