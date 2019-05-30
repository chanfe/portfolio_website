import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Portfolio.scss';
import { Container, Responsive } from 'semantic-ui-react'
import ScrollingWrapper from './ScrollingWrapper.js'

import typing from '../assets/typing.gif'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skill from '../components/Skill'
import Intrests from '../components/Intrests'
import Contact from '../components/Contact'
import Awards from '../components/Awards'
import Footer from './Footer'
import NavBar from './NavBar'

const darkgrayStyle = {
  background:"#262626",
  color:"white",
};


class MainPage extends Component {
  
  constructor(props){
    super(props)
    this.about = React.createRef() 
    this.edu = React.createRef() 
    this.intrests = React.createRef() 
    this.skill = React.createRef() 
    this.contact = React.createRef() 
    this.top = React.createRef()   // Create a ref object 
    this.state ={
    }
  }

  scrollToMyRef = (e) => window.scrollTo(0, this.e.current.offsetTop)

  render(){
    return (
    <div >
      <div ref={this.top}></div>

      <div style={darkgrayStyle}>
        <NavBar />
      </div>

      <div className="container">
        <img src={typing} className="image" alt=""/>
        <div className="overlay">
          <div className="text">
            <h1>Hello, I'm Felix Chan</h1>
            <h2>FullStack Web Developer</h2>
          </div>
        </div>
      </div>

      <div className="grayStyle" ref={this.about}>
        <Container textAlign='center'>
          <About />
        </Container>
      </div>

      <div ref={this.edu}>
        <Container textAlign='center'>
          <Education />
        </Container>
      </div>

      <div className="grayStyle" ref={this.skill}>
        <Skill />
      </div>

      <div ref={this.intrests}>
        <Container textAlign='center'>
          <Intrests />
        </Container>
      </div>

      <div className="darkdarkgrayStyle" ref={this.contact}>
        <Container textAlign='center'>
          <Contact />
        </Container>
      </div>

      <div onClick={this.scrollToMyRef(this.top)}> >
        <Footer />
      </div> 

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
