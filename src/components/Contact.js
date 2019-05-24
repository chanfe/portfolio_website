import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react'
import './all.scss'

class Contact extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h2 className="novaStyle">
        I'd love to hear from you.

        (123)-456-7890

        Download CV

        </h2>
        <Container textAlign='center' className="spaceing">
            <a href="#"><Icon name='facebook'  size='big' inverted color='black' className="icon"/></a>
            <a href="#"><Icon name='twitter' size='big' inverted color='black' className="icon"/></a>
            <a href="https://linkedin.com/in/felixchan29/"><Icon name='linkedin' size='big' inverted color='black' className="icon"/></a>
            <a href="#"><Icon name='google plus' size='big' inverted color='black' className="icon"/></a>
            <a href="https://github.com/chanfe"><Icon name='github' size='big' inverted color='black' className="icon"/></a>
            <a href="#"><Icon name='youtube' size='big' inverted color='black' className="icon"/></a>
            <a href="#"><Icon name='mail' size='big' inverted color='black' className="icon"/></a>
        </Container>
      </Container>
    )
  }
}

export default Contact
