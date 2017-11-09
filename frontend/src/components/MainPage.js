import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';

class MainPage extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <Header />
        <div className="categories-session">
          <div className="categories">
            {categories.map(category => (
              <div className="categories-item" key={category.name}>
                <div className="category">
                  <Link to={`/category/${category.path}`}>{category.name}</Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/">
            <h2 className="show-all">Show all</h2>
          </Link>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  categories: PropTypes.array
};

MainPage.defaultProps = {
  categories: []
};

const mapStateToProps = ({ category }) => ({
  ...category
});

export default connect(mapStateToProps)(MainPage);
