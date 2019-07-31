import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export class SignedOutLinks extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <Menu inverted size='huge' stackable>
          <Menu.Item
            as={NavLink}
            to='/'
            name='jopronet'
            active={activeItem === "jopronet"}
            content='JoProNet'
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink}
              to='/profiles'
              name='developers'
              active={activeItem === "developers"}
              content='Developers'
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to='/register'
              name='register'
              active={activeItem === "register"}
              content='Register'
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              to='/login'
              name='login'
              active={activeItem === "login"}
              content='Login'
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </React.Fragment>
    );
  }
}

export default SignedOutLinks;
