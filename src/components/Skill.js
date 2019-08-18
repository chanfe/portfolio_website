import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Skill extends Component {

  render(){
    return (
      <Container textAlign='left'>
          <Responsive {...Responsive.onlyMobile}>
          <h1>Technologies</h1>
            <h3>DAY-TO-DAY COMFORT</h3>
    
            <ul>
              <li>HTML / CSS</li>
              <li>JavaScrip / React.js / jQuery</li>
              <li>Ruby on Rails</li>
              <li>Python</li>
              <li>MySQL</li>
              <li>Version Control (GIT)</li>
              <li>SemanticUI / Bootstrap</li>
              <li>Agile Methodology</li>
            </ul>

            <h3>EXPERIENCE WITH</h3>
  
            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>Groovy</li>
              <li>Allassian Suite (Jira / Confluence / Bitbucket)</li>
              <li>Unity</li>
              <li>Heroku</li>
              <li>Node.js(limited)</li>
              <li>Express(limited)</li>
              <li>MongoDB(limited)</li>
              <li>Jenkins(limited)</li>
              <li>twilio(limited)</li>
              <li>AWS(limited)</li>
              <li>AWS EC2(limited)</li>
              <li>AWS Sumerian(limited)</li>
              <li>Firebase(google)(limited)</li>

            </ul>
          </Responsive>

          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid >
              <Grid.Row >
                <Grid.Column width={5}>
                  <h1>Technologies</h1>
                </Grid.Column>
                <Grid.Column width={6}>
                  <h3>DAY-TO-DAY COMFORT</h3>
          
                  <ul>
                    <li>HTML / CSS</li>
                    <li>JavaScrip / React.js / jQuery</li>
                    <li>Ruby on Rails</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>Version Control (GIT)</li>
                    <li>SemanticUI / Bootstrap</li>
                    <li>Agile Methodology</li>
                  </ul>
                </Grid.Column>
                <Grid.Column width={5}>
                 <h3>EXPERIENCE WITH</h3>
        
                  <ul>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Groovy</li>
                    <li>Allassian Suite (Jira / Confluence / Bitbucket)</li>
                    <li>Unity</li>
                    <li>Heroku</li>
                    <li>Node.js(limited)</li>
                    <li>Express(limited)</li>
                    <li>MongoDB(limited)</li>
                    <li>Jenkins(limited)</li>
                    <li>twilio(limited)</li>
                    <li>AWS(limited)</li>
                    <li>AWS Sumerian(limited)</li>


                  </ul>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>

      </Container>
    )
  }
}

export default Skill
