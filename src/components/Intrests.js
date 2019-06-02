import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './all.scss'

class Intrests extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h1>Intrests</h1>
        <h2>Out of Office</h2>
        <h2 className="novaStyle">
        a foodie, game enthusiast, riddles, 
        </h2>
      </Container>
    )
  }
}

export default Intrests
