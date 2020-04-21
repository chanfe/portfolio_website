import React, { Component } from 'react';
import { Container, Responsive, Grid, Card, Image, Icon } from 'semantic-ui-react'
import './all.scss'
import './project.scss'

class Projects extends Component {

  render(){
    return (
      <Container textAlign='left'>
        
        <Responsive {...Responsive.onlyMobile}>
          <h1>Projects</h1>
          <Card>
            <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Game.png' wrapped ui={false} />
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
                Click Here to see the App
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Renting.png' wrapped ui={false} />
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
                Click Here to see the App
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Stock.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Stock Exchange App</Card.Header>
              <Card.Meta>
                <span className='date'>Created Oct 2018</span>
              </Card.Meta>
              <Card.Description>
                An app that allows users to buy and sell imitation stock cards in real time and provides users with information about current events.
              </Card.Description>
            </Card.Content>
            <a href="https://stock-game-frontend.herokuapp.com/">
            <Card.Content extra>
                Click Here to see the App
            </Card.Content>
            </a>
          </Card>
          <Card>
            <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/MarsPhoto.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Mars Photo App</Card.Header>
              <Card.Meta>
                <span className='date'>Created Jun 2019</span>
              </Card.Meta>
              <Card.Description>
                An app if input a sol and camera will give you all of the photo that rover curiosity took
              </Card.Description>
            </Card.Content>
            <a href="https://mars-photo-frontend.herokuapp.com/">
              <Card.Content extra>
                Click Here to see the App
              </Card.Content>
            </a>
          </Card>
          <p>Some of these site my take up to 5 minutes to spin up and may need to refresh to work.</p>
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <h1>Projects</h1>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <div class='container2'>
                <Card>
                  <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Game.png' wrapped ui={false} />
                  <div class="overlay2">
                    <Card>
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
                          <Icon circular name='linkify' />
                        </a>
                        <a href="https://github.com/chanfe/game-on-frontend">
                          <Icon circular name='github' />
                        </a>
                      </Card.Content>
                    </Card>
                  </div>
                </Card>
                </div>
              </Grid.Column>

              <Grid.Column width={5}>
                <div class='container2'>
                  <Card>
                    <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Renting.png' wrapped ui={false} />
                    <div class="overlay2">
                      <Card>
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
                                <Icon circular name='linkify' />
                              </a>
                              <a href="https://github.com/chanfe/community-renting-app-frontend">
                                <Icon circular name='github' />
                              </a>
                        </Card.Content>
                      </Card>
                    </div>
                  </Card>
                </div>
              </Grid.Column>
              <Grid.Column width={5}>
                <div class='container2'>
                  <Card>
                    <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Stock.png' wrapped ui={false} />
                    <div class="overlay2">
                    <Card>
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
                              <Icon circular name='linkify' />
                            </a>
                            <a href="https://github.com/joyhuangg/stock_game_frontend">
                              <Icon circular name='github' />
                            </a>
                    </Card.Content>
                    </Card>
                    </div>
                  </Card>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <div class='container2'>
                  <Card>
                    <Image src='https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/MarsPhoto.png' wrapped ui={false} />
                    <div class="overlay2">
                    <Card>
                    <Card.Content>
                      <Card.Header>Mars Photo App</Card.Header>
                      <Card.Meta>
                        <span className='date'>Created Jun 2019</span>
                      </Card.Meta>
                      <Card.Description>
                        An app if input a sol and camera will give you all of the photo that rover curiosity took
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                            <a href="https://mars-photo-frontend.herokuapp.com/">
                              <Icon circular name='linkify' />
                            </a>
                            <a href="https://github.com/chanfe/mars-photo-search-frontend">
                              <Icon circular name='github' />
                            </a>
                    </Card.Content>
                    </Card>
                    </div>
                  </Card>
                </div>
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
