import React, { Component } from 'react';
import './App.scss';
import Portfolio from './containers/Portfolio';
import { Responsive, Button } from 'semantic-ui-react'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        {/* <meta property='og:title' content="Felix Chan portfolio"/>
        <meta property='og:image' content="./assets/typing.gif"/>
        <meta property='og:description' content="This is my portfolio"/>
        <meta property='og:url' content="https://felixchan.netlify.com/" /> */}
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
