import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="categories">
          {this.props.categories.map(category => (
            <div className="categories-item" key={category}>
              <div className="category">
                <Link to={category}>{category}</Link>
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
