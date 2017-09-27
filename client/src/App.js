import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from './components/MainPage';
import Post from './components/Post';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/:category" component={MainPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter(connect()(App));
