import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class About extends Component {

  render(){
    return (
      <Container textAlign='left'>
        
        <Responsive {...Responsive.onlyMobile}>
         <h1>About Me</h1>
          <h2>My Background</h2>
          <p>
          I have a computer science degree with about 2 years of experiance working as a software developer.  
          With passion I like to design and build stunning web applications that align with modern and minimalist patterns.
          My goal is to create something special for each project.  
          I like to become a full stack web developer where I can contribute by build features and applications with a collaberative team.
          </p> 	 
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <h1>About Me</h1>
              </Grid.Column>
              <Grid.Column width={11}>
                <h3>My Background</h3>
                <p>
                  I have a computer science degree with about 2 years of experience working as a software developer. 
                  With passion I like to design and build stunning web applications that align with modern and minimalist patterns.
                  My goal is to create something special for each project. 
                  I like to become a full stack web developer where I can contribute by build features and applications with a collaborative team.
                </p> 	      
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    )
  }
}

export default About
