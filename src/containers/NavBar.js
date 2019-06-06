import React, { Component } from 'react'
import { Menu, Segment} from 'semantic-ui-react'
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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleSidebarHide = () => this.setState({ visible: false })
  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  render() {
    const { children } = this.props
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
                {/* <Menu.Item
                name='Awards'
                onClick={this.props.scrollToAwards}
                /> */}
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
