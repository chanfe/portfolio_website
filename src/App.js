import React, { Component } from 'react';
import './App.scss';
import Portfolio from './containers/Portfolio';
import { Responsive } from 'semantic-ui-react'

import {Helmet} from "react-helmet";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>

          <Helmet>
            <title>Personal website</title>
            <meta property="og:url" content="https://felixchan.netlify.com/" data-react-helmet="true" />
            <meta property="og:title" content="Personal website" data-react-helmet="true" />
            <meta property="og:description" content="Felix Chan personal website" data-react-helmet="true" />
            <meta property="og:image" content="https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Media_image.png" data-react-helmet="true" />
          </Helmet> 

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
