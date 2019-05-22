import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Portfolio.scss';
import { Container, Responsive } from 'semantic-ui-react'
import typing from '../assets/typing.gif'

class MainPage extends Component {
  constructor(props){
    super(props)
    this.state ={
    }
  }

  render(){
    return (
    <div >
      <div className="container">
        <img src={typing} className="image" alt=""/>
        <div className="overlay">
          <div className="text">
            <h1>Hello, I'm Felix Chan</h1>
            <h2>FullStack Web Developer</h2>
          </div>
        </div>
      </div>

      <div className="grayStyle">
        <Container textAlign='center'>
          {/* <About /> */}
        </Container>
      </div>

      <Container textAlign='center'>
        {/* <Education /> */}
      </Container>

      <div className="grayStyle">
        {/* <Skills /> */}
      </div>

      <Container textAlign='center'>
        {/* <Intrests /> */}
      </Container>

      <div className="grayStyle">
        <Container textAlign='center'>
          {/* <Contact /> */}
        </Container>
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
