import React, { Component } from 'react';
import './App.scss';
import Portfolio from './containers/Portfolio';
import { Responsive, Button } from 'semantic-ui-react'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
            <Responsive {...Responsive.onlyMobile}>
              <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            </Responsive>      
          <Switch>
            <Route path="/" render={(props) => <Portfolio />} />
          </Switch>
          
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
