import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Portfolio.scss';
import { Icon } from 'semantic-ui-react'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skill from '../components/Skill'
import Intrests from '../components/Intrests'
import Contact from '../components/Contact'
// import Awards from '../components/Awards'
import Projects from '../components/Projects'
import NavBar from './NavBar'

const darkgrayStyle = {
  background:"#262626",
  color:"white",
};


class MainPage extends Component {
  
  constructor(props){
    super(props)
    this.about = React.createRef() // Create a ref object 
    this.edu = React.createRef() 
    this.intrests = React.createRef() 
    this.skill = React.createRef() 
    this.contact = React.createRef() 
    this.top = React.createRef()  
    this.work = React.createRef()  
    this.awards = React.createRef() 
    this.state = {
        show: false,
    }
  }


  scrollToTop = () => window.scrollTo(0, this.top.current.offsetTop)
  scrollToEdu = () => window.scrollTo(0, this.edu.current.offsetTop)
  scrollToAbout = () => window.scrollTo(0, this.about.current.offsetTop)
  scrollToIntrests = () => window.scrollTo(0, this.intrests.current.offsetTop)
  scrollToSkill = () => window.scrollTo(0, this.skill.current.offsetTop)
  scrollToContact = () => window.scrollTo(0, this.contact.current.offsetTop)
  scrollToWork = () => window.scrollTo(0, this.work.current.offsetTop)
  scrollToAwards = () => window.scrollTo(0, this.awards.current.offsetTop)

  render(){
    return (
    <div >
      <div ref={this.top}></div>

      <div style={darkgrayStyle}>
        <NavBar id="navbar" scrollToEdu={this.scrollToEdu} scrollToAbout={this.scrollToAbout} scrollToSkill={this.scrollToSkill} scrollToIntrests={this.scrollToIntrests} scrollToContact={this.scrollToContact} scrollToWork={this.scrollToWork} scrollToAwards={this.scrollToAwards} />
      </div>

      <div className="container">
        <div className="parallax"/>
        <div className="overlay">
          <div id="welcome-section" className="text">
            <h1>Hello, I'm</h1>
            <h3>Felix Chan</h3>
            <h2>FullStack Web Developer</h2>
          </div>
        </div>
      </div>

      
      <div className="grayStyle" ref={this.about}>
          <About />
      </div>

      <div ref={this.edu}>
        <Education /> 
      </div>

      <div ref={this.work}>
        <Experience />
      </div>
        
      <div className="grayStyle" ref={this.skill}>
        <Skill />
      </div>

      <div ref={this.awards}>
        {/* <Awards /> */}
      </div>

      <div ref={this.intrests}>
        <Intrests />
      </div>

      <div className="grayStyle" ref={this.skill}>
        <Projects />
      </div>

      <div className="darkdarkgrayStyle" ref={this.contact}>
        <Contact />
      </div>

      {/* <div onClick={this.scrollToTop}> >
        <Footer />
      </div>  */}

      <button title='Back to top' className='scroll' onClick={ () => { this.scrollToTop(); }}>
        <span className='arrow-up'>
          <Icon name="angle up" style={{padding: "0px 7px 0px 0px"}}></Icon>
        </span>
      </button>

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
