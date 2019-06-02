import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './all.scss'

class Experience extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h1>Experience</h1>
        <h2>Where I have worked</h2>
        <h2 className="novaStyle">
        Lowe’s Corporation, Mooresville, NC 
        Software Developer 	 May 2017 – Dec 2017
        </h2>
        <h2 className="novaStyle">
        Lowe’s Corporation, Mooresville, NC 
        DevOps Engineer 	Jul 2016 – May 2017
        </h2>
      </Container>
    )
  }
}

export default Experience
