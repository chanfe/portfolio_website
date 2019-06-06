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
            </h2>

            <h2>
            (123)-456-7890
            </h2>
            <div style = {{padding:"25px 0px 0px"}}>
              <a href='https://github.com/chanfe/portfolio_website/raw/master/src/assets/Felix_Chan_Software_Engineer.pdf' download>
                <Button>Download Resume</Button>
              </a>
            </div>
            <div style = {{padding:"50px 0px 50px"}}>
                <a href="#"><Icon name='facebook'  size='big' inverted color='black' className="icon"/></a>
                <a href="#"><Icon name='twitter' size='big' inverted color='black' className="icon"/></a>
                <a href="https://linkedin.com/in/felixchan29/"><Icon name='linkedin' size='big' inverted color='black' className="icon"/></a>
                <a href="https://github.com/chanfe"><Icon name='github' size='big' inverted color='black' className="icon"/></a>
                <a href="#"><Icon name='youtube' size='big' inverted color='black' className="icon"/></a>
                <a href="mailto:felixchan29@gmail.com"><Icon name='mail' size='big' inverted color='black' className="icon"/></a>
            </div> 
          </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid columns={2}>
            <Grid.Row >
              <Grid.Column>
                <h1 style = {{padding:"50px 0px 50px"}}>
                  I'd love to hear from you.
                </h1>

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
                <h3 style = {{padding:"50px 0px 50px"}}>felixchan29@gmail.com</h3>
                <h3 style = {{padding:"0px 0px 50px"}}>336-772-5318</h3>

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
