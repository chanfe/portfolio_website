import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './all.scss'

class About extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h1>About Me</h1>
        <h2>My Background</h2>
        <h2 className="novaStyle">
          I have a computer science degree with about 2 years of experiance working as a software developer.  
          With passion I like to design and build stunning web applications that align with modern and minimalist patterns.
          My goal is to create something special for each project.  
          I like to become a full stack web developer where I can contribute by build features and applications with a collaberative team.
        </h2>
      </Container>
    )
  }
}

export default About
