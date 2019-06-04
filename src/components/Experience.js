import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Experience extends Component {


  render(){
    return (
      <Container textAlign='left'>
        <Responsive {...Responsive.onlyMobile}>
          <h1>Work Experience</h1>
            <h2>Lowe’s Corporation, Mooresville, NC, Jul 2016 – Dec 2017</h2>
            <h3>Software Engineer</h3>
            <p>Software Developer on the Enterprise Automation team and working on modernizing Lowe’s development landscape by automating and improving production pipelines.
            Developed solutions to migrate automated deployments from a subscribed service to open source Jenkins continuous integration tool using Python and Java as a main coding language.
            Automated BitBucket Compliance process using Jenkins and the Atlassian Suite resulted in 80-percent compliance rate,
            Automated enterprise administering process using Jenkins and Atlassian Suite resulted in a 90-percent decrease in manual labor.
            Practiced agile methodology and Continuous Integration/Delivery by using Jira and Confluence.
            </p>
          </Responsive>
          
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h1>Work Experience</h1>
                </Grid.Column>
                <Grid.Column width={11}>
                <h2>Lowe’s Corporation, Mooresville, NC, Jul 2016 – Dec 2017</h2>
                  <h3>Software Engineer</h3>
                  <p>Software Developer on the Enterprise Automation team and working on modernizing Lowe’s development landscape by automating and improving production pipelines.
                  Developed solutions to migrate automated deployments from a subscribed service to open source Jenkins continuous integration tool using Python and Java as a main coding language.
                  Automated BitBucket Compliance process using Jenkins and the Atlassian Suite resulted in 80-percent compliance rate,
                  Automated enterprise administering process using Jenkins and Atlassian Suite resulted in a 90-percent decrease in manual labor.
                  Practiced agile methodology and Continuous Integration/Delivery by using Jira and Confluence.
                  </p>
                </Grid.Column>
                <Grid.Column>
                 
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>
      </Container>
    )
  }
}

export default Experience
