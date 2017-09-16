import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
      <div className="categories categories-item">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Categories;
