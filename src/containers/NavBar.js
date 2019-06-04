import React, { Component } from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom';
import { Menu, Segment, Responsive, Button, Header, Icon, Image, Container } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux'


class NavBar extends Component {

  constructor(props){
    super(props)
    this.myRef = React.createRef()
    this.state ={
      activeItem: 'home',
      visible: false
    }
  }

  // shouldComponentUpdate(nextState) {
  //   const differentTitle = this.state.activeItem !== nextState.activeItem;
  //   console.log(nextState,this.state.activeItem,differentTitle)
  //   return differentTitle;
  // }



  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleSidebarHide = () => this.setState({ visible: false })
  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  render() {
    const { children } = this.props
    const { visible } = this.state
    return (
      <div>
          <Segment inverted >
            <Menu inverted pointing secondary>
              <Menu.Menu position='left'>
                <Menu.Item
                name='About'
                onClick={this.props.scrollToAbout}
                />
                <Menu.Item
                name='Education'
                onClick={this.props.scrollToEdu}
                />
                <Menu.Item
                name='Skill'
                onClick={this.props.scrollToSkill}
                />
                <Menu.Item
                name='Intrest'
                onClick={this.props.scrollToIntrests}
                />
                <Menu.Item
                name='Contact'
                onClick={this.props.scrollToContact}
                />
                <Menu.Item
                name='Work experiance'
                onClick={this.props.scrollToWork}
                />
                <Menu.Item
                name='Awards'
                onClick={this.props.scrollToAwards}
                />
              </Menu.Menu>
            </Menu>
          </Segment>
          { children }
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
