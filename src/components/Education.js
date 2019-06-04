import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Education extends Component {

  render(){
    return (
      <Container textAlign='left'>
        <Responsive {...Responsive.onlyMobile}>
          <h1>Education</h1>
          <h2>Boot Camp Graduate</h2>
          <p>
            Flatiron School - Access Lab, Brooklyn, NY, Augest 2018 – November 2018
          </p>
          <h2>Bachelor of Science in Computer Science</h2>
          <p>
            Appalachian State University, Boone, NC, Augest 2012 - May 2016
          </p> 	 
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <h1>Education</h1>
              </Grid.Column>
              <Grid.Column width={11}>
                <h2>Boot Camp Graduate</h2>
                <p>
                  Flatiron School - Access Lab, Brooklyn, NY, Augest 2018 – November 2018
                </p>
                <h2>Bachelor of Science in Computer Science</h2>
                <p>
                  Appalachian State University, Boone, NC, Augest 2012 - May 2016
                </p> 	      
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    )
  }
}

export default Education
