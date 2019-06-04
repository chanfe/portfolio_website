import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Skill extends Component {

  render(){
    return (
      <Container textAlign='left'>
          <Responsive {...Responsive.onlyMobile}>
          <h1>Technologies</h1>
            <h2>DAY-TO-DAY COMFORT</h2>
    
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

            <h2>EXPERIENCE WITH</h2>
  
            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>Groovy</li>
              <li>Allassian Suite (Jira / Confluence / Bitbucket)</li>
              <li>Unity</li>
              <li>Heroku</li>
              <li>Node.js(limited)</li>
              <li>Jenkins(limited)</li>
              <li>AWS(limited)</li>

            </ul>
          </Responsive>
          
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid >
              <Grid.Row columns={3}>
                <Grid.Column>
                  <h1>Technologies</h1>
                </Grid.Column>
                <Grid.Column>
                  <h2>DAY-TO-DAY COMFORT</h2>
          
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
                <Grid.Column>
                 <h2>EXPERIENCE WITH</h2>
        
                  <ul>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Groovy</li>
                    <li>Allassian Suite (Jira / Confluence / Bitbucket)</li>
                    <li>Unity</li>
                    <li>Heroku</li>
                    <li>Node.js(limited)</li>
                    <li>Jenkins(limited)</li>
                    <li>AWS(limited)</li>

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
