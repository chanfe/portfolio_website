import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './containers/NavBar';
import Footer from './containers/Footer';
import Portfolio from './containers/Portfolio';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>          
          <Switch>
            <Route path="/" render={(props) => <Portfolio />} />
          </Switch>
          
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
