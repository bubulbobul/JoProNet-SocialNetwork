import React, { useState, Fragment } from "react";
import { Menu, Container, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { NavLink } from "react-router-dom";
import TopSidebar from "./TopSidebar";
import Logo from "../../assets/images/logo.jpg";

const AuthNavbar = props => {
  const [active, setActive] = useState({
    activeItem: ""
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;
  return (
    <Fragment>
      <TopSidebar />
      <Fragment>
        <Menu size='small' stackable>
          <Container>
            <Menu.Item>
              <Image circular src={Logo} size='tiny' />{" "}
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                as={NavLink}
                to='/dashboard'
                name='dashboard'
                active={activeItem === "dashboard"}
                onClick={handleItemClick}
              >
                <Icon name='user' />
                DASHBOARD
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to='/posts'
                name='posts'
                active={activeItem === "posts"}
                onClick={handleItemClick}
              >
                <Icon name='comments' />
                POSTS
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                to='/profiles'
                name='profiles'
                active={activeItem === "profiles"}
                onClick={handleItemClick}
              >
                <Icon name='users' />
                COMMUNITY
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Fragment>
    </Fragment>
  );
};

export default AuthNavbar;
