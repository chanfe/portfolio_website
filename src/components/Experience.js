import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './all.scss'

class Experience extends Component {

  render(){
    return (
      <Container textAlign='center'>
        <h2 className="novaStyle">
        Lowe’s Corporation, Mooresville, NC 
        Software Developer 	 May 2017 – Dec 2017
        Software Developer on the DCS team and migrated data from legacy systems to open source Jenkins for QA operations. 
        Deployed, maintained, and administered Jenkins and Atlassian tools to maintain current status quote.
        Developed solutions to migrate automated deployments from a subscribed service to open source Jenkins continuous integration tool using Python and Java as a main coding language.
        Collaborated with other software consultants and architects to ensure functional specifications.
        </h2>
        <h2 className="novaStyle">
        Lowe’s Corporation, Mooresville, NC 
        DevOps Engineer 	Jul 2016 – May 2017
        DevOps Engineer on the Enterprise Automation team and working on modernizing Lowe’s development landscape by automating and improving production pipelines.
        Automated enterprise administering process using Jenkins and Atlassian Suite resulted in a 90-percent decrease in manual labor.
        Practiced agile methodology and Continuous Integration/Delivery by using Jira and Confluence.
        Contributed to the streamlining of the code base from Python 2.7 to Python 3, resulting in better code quality and better security.
        </h2>
      </Container>
    )
  }
}

export default Experience
