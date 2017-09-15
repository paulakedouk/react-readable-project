import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//import { getCategories } from '../actions';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

class Categories extends Component {
  render() {
    // console.log(this.props.category);
    return (
      <div className="categories-item">
        <h1>{this.props.category}</h1>
      </div>
    );
  }
}

export default Categories;
