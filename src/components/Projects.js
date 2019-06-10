import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Projects extends Component {

  render(){
    return (
      <Container textAlign='left'>
        
        <Responsive {...Responsive.onlyMobile}>
          <h1>Projects</h1>
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>

              </Grid.Column>
              <Grid.Column width={11}>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    )
  }
}

export default Projects
