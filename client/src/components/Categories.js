import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="categories">
        <div className="categories-item">
          <div className="category">
            <h1>{category.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.array
};

Categories.defaultProps = {
  category: []
};

const mapStateToProps = ({ category }) => ({
  ...category
});

export default Categories;
