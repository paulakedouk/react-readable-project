import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { categoriesAPI } from './actions';
import MainPage from './components/MainPage';

class App extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/:category" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  getCategories: PropTypes.func
};

export default withRouter(
  connect(null, {
    getCategories: categoriesAPI
  })(App)
);
