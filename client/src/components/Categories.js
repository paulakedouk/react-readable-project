import React, { Component } from 'react';

import _ from 'lodash';
import { connect } from 'react-redux';
import { categoriesAPI } from '../actions';

class Categories extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="categories-item">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Categories;
