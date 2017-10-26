import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MainPage extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <div className="categories">
          {categories.map(category => (
            <div className="categories-item" key={category.name}>
              <div className="category">
                <Link to={category.path}>{category.name}</Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">
          <h2 className="show-all">Show all</h2>
        </Link>
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
