import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Portfolio from './containers/Portfolio';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const darkgrayStyle = {
  background:"#262626",
  color:"white",
};

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          {/* <div style={darkgrayStyle}>
            <NavBar />
          </div> */}

          <Switch>
            <Route path="/" render={(props) => <Portfolio />} />
          </Switch>

          {/* <Footer /> */}
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
