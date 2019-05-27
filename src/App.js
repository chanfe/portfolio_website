import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './containers/NavBar';
import Footer from './containers/Footer';
import Portfolio from './containers/Portfolio';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const darkgrayStyle = {
  background:"#262626",
  color:"white",
};

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }
  
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

  render() {
    return (
      <Router>
        <React.Fragment>
        <div ref={this.myRef}></div>
          <div style={darkgrayStyle}>
            <NavBar />
          </div>
          
          <Switch>
            <Route path="/" render={(props) => <Portfolio />} />
          </Switch>

          <div onClick={this.scrollToMyRef}> >
            <Footer />
          </div> 
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
