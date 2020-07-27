import React, { Component } from 'react';
import { Container, Responsive, Grid, Card, Image, Icon } from 'semantic-ui-react'
import './all.scss'
import './project.scss'

class Projects extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects:[
        {
          image_src:"https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Game.png",
          title:"Follow",
          created:"Created Nov 2018",
          description:"A 2D adaptive adventure game.",
          website:"https://gameonweb.herokuapp.com/",
          github:"https://github.com/chanfe/game-on-frontend"
        },
        {
          image_src:"https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Renting.png",
          title:"Community Renting App",
          created:"Created Oct 2018",
          description:"An app that allows users to rent or rent out all kinds of items.",
          website:"https://community-renting.herokuapp.com/",
          github:"https://github.com/chanfe/community-renting-app-frontend"
        },
        {
          image_src:"https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Stock.png",
          title:"Stock Exchange App",
          created:"Created Oct 2018",
          description:"An app that allows users to buy and sell imitation stock cards in real time and provides users with information about current events.",
          website:"https://stock-game-frontend.herokuapp.com/",
          github:"https://github.com/joyhuangg/stock_game_frontend"
        },
        {
          image_src:"https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/MarsPhoto.png",
          title:"Mars Photo App",
          created:"Created Jun 2019",
          description:"An app if input a sol and camera will give you all of the photo that rover curiosity took",
          website:"https://mars-photo-frontend.herokuapp.com/",
          github:"https://github.com/chanfe/mars-photo-search-frontend"
        },
        {
          image_src:"https://raw.githubusercontent.com/chanfe/portfolio_website/master/src/assets/Art_React.png",
          title:"Art React",
          created:"Created Jul 2020",
          description:"React to a random art and see other people reaction to that same art.",
          website:"https://art-react.herokuapp.com/",
          github:"https://github.com/chanfe/art_react"
        },
      ]
    };
  }

  

  render(){
    let listedProjectsMoblie = this.state.projects.map((project) => {
      return (
        <Card>
          <Image src={project.image_src} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{project.title}</Card.Header>
            <Card.Meta>
              <span className='date'>{project.created}</span>
            </Card.Meta>
            <Card.Description>
              {project.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={project.website}>
              Click Here to see the App
            </a>
          </Card.Content>
        </Card>
      );
    });

    let listedProjectsWebsite = this.state.projects.map((project) => {
        return (
          <Grid.Column width={5}>
            <div class='container2'>
              <Card>
                <Image src={project.image_src} wrapped ui={false} />
                <div class="overlay2">
                  <Card>
                    <Card.Content>
                      <Card.Header>{project.title}</Card.Header>
                      <Card.Meta>
                        <span className='date'>{project.created}</span>
                      </Card.Meta>
                      <Card.Description>
                        {project.description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a href={project.website}>
                        <Icon circular name='linkify' />
                      </a>
                      <a href={project.github}>
                        <Icon circular name='github' />
                      </a>
                    </Card.Content>
                  </Card>
                </div>
              </Card>
            </div>
          </Grid.Column>
        );
    });

    return (
      <Container textAlign='left'>
        
        <Responsive {...Responsive.onlyMobile}>
          <h1>Projects</h1>
          {listedProjectsMoblie}
          <p>Some of these site my take up to 5 minutes to spin up and may need to refresh to work.</p>
        </Responsive>
        
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <h1>Projects</h1>
          <Grid>
            {listedProjectsWebsite}
          </Grid>
          <p>Some of these site my take up to 5 minutes to spin up and may need to refresh to work.</p>
        </Responsive>
      </Container>
    )
  }
}

export default Projects
