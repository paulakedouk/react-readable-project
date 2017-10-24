import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="categories">
        {categories.map((cat, index) => (
          <div className="categories-item" key={index}>
            <div className="category">
              <Link to={cat.path}>{cat.name}</Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
