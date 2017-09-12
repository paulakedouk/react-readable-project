import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { getCategories } from '../actions';
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Categories extends Component {
  render() {
    const { category } = this.props;

    return (
      <div className="categories">
        <div className="categories-item">
          <h1>{category.name}</h1>
        </div>
        <div className="categories-item">
          <h1>{category.name}</h1>
        </div>
        <div className="categories-item">
          <h1>{category.name}</h1>
        </div>
      </div>
    );
  }
}

export default Categories;
