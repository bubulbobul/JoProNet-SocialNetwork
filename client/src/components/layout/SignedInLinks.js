import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export class SignedInLinks extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu size='huge' stackable>
        <Menu.Item
          name='jopronet'
          active={activeItem === "jopronet"}
          content='JoProNet'
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='SignedInLinks'
            active={activeItem === "SignedInLinks"}
            content='SignedInLinks'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='SignedInLinks'
            active={activeItem === "SignedInLinks"}
            content='SignedInLinks'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='SignedInLinks'
            active={activeItem === "SignedInLinks"}
            content='SignedInLinks'
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default SignedInLinks;
