import React, { Component } from 'react';
import { Container, Responsive, Grid, Card, Image } from 'semantic-ui-react'
import './all.scss'

class Projects extends Component {

  render(){
    return (
      <Container textAlign='left'>
        
        <Responsive {...Responsive.onlyMobile}>
          {/* <h1>Projects</h1> */}
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <h1>Projects</h1>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <Card>
                  <Image src='../assets/Game.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Follow</Card.Header>
                    <Card.Meta>
                      <span className='date'>Created Nov 2018</span>
                    </Card.Meta>
                    <Card.Description>
                      A 2D adaptive adventure game.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="https://gameonweb.herokuapp.com/">
                      https://www.google.com/
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={5}>
                <Card>
                  <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Community Renting App</Card.Header>
                    <Card.Meta>
                      <span className='date'>Created Oct 2018</span>
                    </Card.Meta>
                    <Card.Description>
                      An app that allows users to rent or rent out all kinds of items. 
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="https://community-renting.herokuapp.com/">
                      https://www.google.com/
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={6}>
                <Card>
                  <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Stock Exchange App</Card.Header>
                    <Card.Meta>
                      <span className='date'>Created Oct 2018</span>
                    </Card.Meta>
                    <Card.Description>
                      An app that allows users to buy and sell imitation stock cards in real time and provides users with information about current events.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="https://stock-game-frontend.herokuapp.com/">
                      https://www.google.com/
                    </a>
                    <a>https://mars-photo-frontend.herokuapp.com/</a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <p>Some of these site my take up to 5 minutes to spin up and may need to refresh to work.</p>
        </Responsive>
      </Container>
    )
  }
}

export default Projects
