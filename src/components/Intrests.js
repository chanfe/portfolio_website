import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Intrests extends Component {

  render(){
    return (
      <Container textAlign='left'>
        
        <Responsive {...Responsive.onlyMobile}>
          <h1>Interests</h1>
          <h3>Out of Office</h3>
          <p>
            <ul>
              <li>Game enthusiast</li>
              <li>Food enthusiast</li>
            </ul>
          </p>
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <h1>Interests</h1>
              </Grid.Column>
              <Grid.Column width={11}>
                <h3>Out of Office</h3>
                <p>
                  <ul>
                    <li>Game enthusiast</li>
                    <li>Food enthusiast</li>
                  </ul>
                </p>   
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    )
  }
}

export default Intrests
