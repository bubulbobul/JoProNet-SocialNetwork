import React, { useState } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { connect } from "react-redux";
import { logoutAct } from "../../actions/authAct";
import { NavLink } from "react-router-dom";

const AuthNavbar = props => {
  const [active, setActive] = useState({
    activeItem: ""
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const handleLogout = () => {
    props.logoutAct();
  };
  const { activeItem } = active;
  return (
    <Menu size='huge' stackable>
      <Menu.Item
        name='jopronet'
        active={activeItem === "jopronet"}
        content='JoProNet'
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item
          as={NavLink}
          to='/developers'
          name='developers'
          active={activeItem === "developers"}
          content='Developers'
          onClick={handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to='/posts'
          name='posts'
          active={activeItem === "posts"}
          content='Posts'
          onClick={handleItemClick}
        />
        <Menu.Item
          as={NavLink}
          to='/dashboard'
          name='dashboard'
          active={activeItem === "dashboard"}
          content='Dashboard'
          onClick={handleItemClick}
        >
          <Icon name='user' />
          Dashboard
        </Menu.Item>
        <Menu.Item onClick={handleLogout}>
          <Button color='red' size='medium'>
            LOG OUT
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    apiUrl: state.apiUrl.apiUrl,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logoutAct }
)(AuthNavbar);
