import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './all.scss'

class Awards extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h1>Awards</h1>
        <h2>Where I shine</h2>
        <h2 className="novaStyle">
            One of the best defending code in Flatiron Hackathon
        </h2>
      </Container>
    )
  }
}

export default Awards
