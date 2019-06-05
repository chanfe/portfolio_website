import React, { Component } from 'react';
import { Container, Icon, Responsive, Grid, Button } from 'semantic-ui-react'
import './all.scss'

class Contact extends Component {

  render(){
    return (
      <Container textAlign='left'>
          <Responsive {...Responsive.onlyMobile}>
            <h2>
            I'd love to hear from you.

            (123)-456-7890

            Download CV


            </h2>
            <Container textAlign='center' className="spaceing">
                <a href="#"><Icon name='facebook'  size='big' inverted color='black' className="icon"/></a>
                <a href="#"><Icon name='twitter' size='big' inverted color='black' className="icon"/></a>
                <a href="https://linkedin.com/in/felixchan29/"><Icon name='linkedin' size='big' inverted color='black' className="icon"/></a>
                <a href="https://github.com/chanfe"><Icon name='github' size='big' inverted color='black' className="icon"/></a>
                <a href="#"><Icon name='youtube' size='big' inverted color='black' className="icon"/></a>
                <a href="mailto:felixchan29@gmail.com"><Icon name='mail' size='big' inverted color='black' className="icon"/></a>
            </Container> 
          </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={2}>
            <Grid.Row >
              <Grid.Column>
                <h2 style = {{padding:"50px 0px 50px"}}>
                  I'd love to hear from you.
                </h2>

                <Container textAlign='left' className="spaceing" style = {{padding:"0px 0px 50px"}}>
                  <a href="#"><Icon name='facebook'  size='big'  color='white' className="icon"/></a>
                  <a href="#"><Icon name='twitter' size='big'  color='white' className="icon"/></a>
                  <a href="https://linkedin.com/in/felixchan29/"><Icon name='linkedin' size='big' color='white' className="icon"/></a>
                  <a href="#"><Icon name='google plus' size='big'  color='white' className="icon"/></a>
                  <a href="https://github.com/chanfe"><Icon name='github' size='big'  color='white' className="icon"/></a>
                  <a href="#"><Icon name='youtube' size='big' color='white' className="icon"/></a>
                  <a href="mailto:felixchan29@gmail.com"><Icon name='mail' size='big' color='white' className="icon"/></a>
                </Container> 
              </Grid.Column>
              <Grid.Column>
                <p>felixchan29@gmail.com</p>
                <p>336-772-5318</p>

                <a href='https://github.com/chanfe/portfolio_website/raw/master/src/assets/Felix_Chan_Software_Engineer.pdf' download>
                  <Button>Download Resume</Button>
                </a>
                 
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    )
  }
}

export default Contact
