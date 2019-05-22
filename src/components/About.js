import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './all.scss'

class Me extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h2 className="novaStyle">
          Hi my name is Felix Chan and I am a Full Stack Developer.  
          As a Full Stack I design and build stunning web applications that align with modern and minimalist patterns.  
          All products are built to be mobile responsive with the latest technologies that have the best chance to stand the test of time.  
          My goal is to create something special for each project.  
          I’m excited to take my diverse skill set, and work with a creative group of people toward a common goal.
        </h2>
      </Container>
    )
  }
}

export default Me
