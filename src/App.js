import React, { Component } from 'react';
import './App.scss';
import Portfolio from './containers/Portfolio';
import { Responsive } from 'semantic-ui-react'

import MetaTags from 'react-meta-tags';


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

          <MetaTags>
            <meta id="meta-description" name="description" content="Felix Chan personal website" />
            <meta id="og-title" property="og:title" content="Personal website" />
            <meta id="og-image" property="og:image" content="https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Media_image.png" />
          </MetaTags>

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
