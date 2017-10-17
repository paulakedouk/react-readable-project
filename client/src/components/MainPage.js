import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';
import Categories from './Categories';

class MainPage extends Component {
  render() {
    const { categories } = this.props;
    // const { category } = this.props.match.params;

    // function loadCategory() {
    //   console.log(categories);
    //   if (!categories.path) {
    //     return console.log('no path');
    //   } else {
    //     return console.log('have path');
    //   }
    // }

    return (
      <div className="header">
        <Header />

        <div className="categories">
          {categories.map((category, index) => (
            <div key={index}>
              <Link to={category.path}>
                <Categories category={category} />
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Link to="/">
            <h2 className="show-all">Show all</h2>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  };
};

export default connect(mapStateToProps)(MainPage);
