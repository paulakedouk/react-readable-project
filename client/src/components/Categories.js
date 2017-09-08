import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    // console.log(this.props.list);
    return (
      <div className="categories">
        <div className="categories-item">
          <h1>{this.props.list}</h1>
        </div>
      </div>
    );
  }
}

export default Categories;
