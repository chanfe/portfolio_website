import React, { Component } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react'
import './all.scss'

class Experience extends Component {


  render(){
    return (
      <Container textAlign='left'>
        <Responsive {...Responsive.onlyMobile}>
          <h1>Work Experience</h1>
          <h3>PlateRate, New York, NY, Dec 2019 – Present</h3>
          <h4>Remote Full Stack Developer </h4>
          <p>
            <ul>
              <li>
              A remote Full Stack Developer and working on modernizing PlateRate frontend by implementing a better website design.              
              </li>
            </ul>
          </p>
          <h3>Full Stack Progressive, New York, NY, Aug 2019 – Mar 2020</h3>
            <h4>Full Stack Web Developer Participate</h4>
            <p>
              <ul>
                <li>
                Getting together in the Full Stack progressive meetup to build a website that users can sign-up with their skill set and allow recruiters to see them.                
                </li>
              </ul>
            </p>
            <h3>Chingu, New York, NY, Jun 2019 – Aug 2019</h3>
            <h4>Remote Full Stack Web Developer Participate</h4>
            <p>
              <ul>
                <li>
                Collaborated with other software consultants to create a MERN stack application
                </li>
                <li>
                  Application uses Google Firebase to deploy and learn how to use React Hooks
                </li>
                <li>
                  This App allows users to keep track of equipments lifespand and gives notfication if it is almost expire.
                </li>
              </ul>
            </p>
            <h3>Lowe’s Corporation, Mooresville, NC, Jul 2016 – Dec 2017</h3>
            <h4>Software Engineer</h4>
            <p>
              <ul>
                <li>
                Software Developer on the Enterprise Automation team and working on modernizing Lowe’s development landscape by automating and improving production pipelines.
                </li>
                <li>
                Developed solutions to migrate automated deployments from a subscribed service to open source Jenkins continuous integration tool using Python and Java as a main coding language.
                </li>
                <li>
                Automated BitBucket Compliance process using Jenkins and the Atlassian Suite resulted in 80-percent compliance rate.
                </li>
                <li>
                Automated enterprise administering process using Jenkins and Atlassian Suite resulted in a 90-percent decrease in manual labor.
                </li>
                <li>
                Practiced agile methodology and Continuous Integration/Delivery by using Jira and Confluence.
                </li>
              </ul>
            
            </p>
          </Responsive>
          
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h1>Work Experience</h1>
                </Grid.Column>
                <Grid.Column width={11}>
                <h3>PlateRate, New York, NY, Dec 2019 – Present</h3>
                <h4>Remote Full Stack Developer </h4>
                <p>
                  <ul>
                    <li>
                    A remote Full Stack Developer and working on modernizing PlateRate frontend by implementing a better website design.              
                    </li>
                  </ul>
                </p>
                <h3>Full Stack Progressive, New York, NY, Aug 2019 – Present</h3>
                <h4>Full Stack Web Developer Participate</h4>
                <p>
                  <ul>
                    <li>
                    Getting together in the Full Stack progressive meetup to build a website that users can sign-up with their skill set and allow recruiters to see them.                
                    </li>
                  </ul>
                </p>
                <h3>Chingu, New York, NY, Jun 2019 – Aug 2019</h3>
                <h4>Remote Full Stack Web Developer Participate</h4>
                <p>
                  <ul>
                    <li>
                    Collaborated with other software consultants to create a MERN stack application
                    </li>
                    <li>
                      Application uses Google Firebase to deploy and learn how to use React Hooks
                    </li>
                    <li>
                      This App allows users to keep track of equipments lifespand and gives notfication if it is almost expire.
                    </li>
                  </ul>
                </p>

                <h3>Lowe’s Corporation, Mooresville, NC, Jul 2016 – Dec 2017</h3>
                  <h4>Software Engineer</h4>
                  <p>
                    <ul>
                      <li>
                      Software Developer on the Enterprise Automation team and working on modernizing Lowe’s development landscape by automating and improving production pipelines.
                      </li>
                      <li>
                      Developed solutions to migrate automated deployments from a subscribed service to open source Jenkins continuous integration tool using Python and Java as a main coding language.
                      </li>
                      <li>
                      Automated BitBucket Compliance process using Jenkins and the Atlassian Suite resulted in 80-percent compliance rate.
                      </li>
                      <li>
                      Automated enterprise administering process using Jenkins and Atlassian Suite resulted in a 90-percent decrease in manual labor.
                      </li>
                      <li>
                      Practiced agile methodology and Continuous Integration/Delivery by using Jira and Confluence.
                      </li>
                    </ul>
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
