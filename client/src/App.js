import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import MainPage from './components/MainPage';

class App extends React.Component {
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

export default withRouter(App);
