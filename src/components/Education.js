import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './all.scss'

class Education extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h1>Education</h1>
        <h2>What I have learned</h2>
        <h2 className="novaStyle">
            Graduate  	Aug 2018 – Nov 2018
            Flatiron School - Access Lab - Brooklyn, NY

        </h2>
        <h2>
            Bachelor of Science in Computer Science, 	      Aug 2012 - May 2016
            Appalachian State University - Boone, NC

        </h2>
      </Container>
    )
  }
}

export default Education
