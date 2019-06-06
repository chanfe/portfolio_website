import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Awards extends Component {

  render(){
    return (
      <Container textAlign='left'>
        <Responsive {...Responsive.onlyMobile}>
          <h1>Awards</h1>
          <h3>Where I shine</h3>
          <p>
            One of the best defending code in Flatiron Hackathon
          </p>
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <h1>Awards</h1>
              </Grid.Column>
              <Grid.Column width={11}>
                <h3>Where I shine</h3>
                <p>
                  One of the best defending code in Flatiron Hackathon
                </p>   
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        
      </Container>
    )
  }
}

export default Awards
