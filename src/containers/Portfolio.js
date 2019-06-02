import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Portfolio.scss';
import { Container, Responsive, Grid, Segment } from 'semantic-ui-react'
import ScrollingWrapper from './ScrollingWrapper.js'

import typing from '../assets/typing.gif'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skill from '../components/Skill'
import Intrests from '../components/Intrests'
import Contact from '../components/Contact'
import Awards from '../components/Awards'
import Footer from './Footer'
import NavBar from './NavBar'

const darkgrayStyle = {
  background:"#262626",
  color:"white",
};


class MainPage extends Component {
  
  constructor(props){
    super(props)
    this.about = React.createRef() 
    this.edu = React.createRef() 
    this.intrests = React.createRef() 
    this.skill = React.createRef() 
    this.contact = React.createRef() 
    this.top = React.createRef()   // Create a ref object 
    this.state ={
    }
  }

  scrollToTop = () => window.scrollTo(0, this.top.current.offsetTop)
  scrollToEdu = () => window.scrollTo(0, this.edu.current.offsetTop)
  scrollToAbout = () => window.scrollTo(0, this.about.current.offsetTop)
  scrollToIntrests = () => window.scrollTo(0, this.intrests.current.offsetTop)
  scrollToSkill = () => window.scrollTo(0, this.skill.current.offsetTop)
  scrollToContact = () => window.scrollTo(0, this.contact.current.offsetTop)

  // href="/chanfe/portfolio_website/raw/master/src/assets/Felix_Chan_Software_Engineer.pdf"
  render(){
    return (
    <div >
      <div ref={this.top}></div>
      <a href='https://github.com/chanfe/portfolio_website/raw/master/src/assets/Felix_Chan_Software_Engineer.pdf' download>Click to download</a>

      <div style={darkgrayStyle}>
        <NavBar scrollToEdu={this.scrollToEdu} scrollToAbout={this.scrollToAbout} scrollToSkill={this.scrollToSkill} scrollToIntrests={this.scrollToIntrests} scrollToContact={this.scrollToContact}/>
      </div>

      <div className="container">
        <img src={typing} className="image" alt=""/>
        <div className="overlay">
          <div className="text">
            <h1>Hello, I'm Felix Chan</h1>
            <h2>FullStack Web Developer</h2>
          </div>
        </div>
      </div>

      <div className="grayStyle" ref={this.about}>
        <Container textAlign='center'>
          <About />
        </Container>
      </div>

      <div ref={this.edu}>
        <Segment.Group>
          <Responsive {...Responsive.onlyMobile}>
            <Container textAlign='center'>
              <Education />
            </Container>
            <Container textAlign='center'>
              <Experience />
            </Container>
          </Responsive>
          
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Education /> 
                </Grid.Column>
                <Grid.Column>
                  <Experience />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>
        </Segment.Group>
      </div>

      <div className="grayStyle" ref={this.skill}>
        <Skill />
      </div>

      <div ref={this.intrests}>
        <Segment.Group>
          <Responsive {...Responsive.onlyMobile}>
            <Container textAlign='center'>
              <Awards />
            </Container>
            <Container textAlign='center'>
              <Intrests />
            </Container>
          </Responsive>
          
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Awards /> 
                </Grid.Column>
                <Grid.Column>
                  <Intrests />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>
        </Segment.Group>
      </div>

      <div className="darkdarkgrayStyle" ref={this.contact}>
        <Container textAlign='center'>
          <Contact />
        </Container>
      </div>

      <div onClick={this.scrollToTop}> >
        <Footer />
      </div> 

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
