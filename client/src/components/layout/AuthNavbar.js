import React, { useState, Fragment } from "react";
import { Menu, Container, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { NavLink } from "react-router-dom";
import TopSidebar from "./TopSidebar";
import Logo from "./logo.jpg";

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
        <Menu size='large' stackable fixed>
          <Container>
            <Menu.Item content='JoProNet'>
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
                to='/developers'
                name='developers'
                active={activeItem === "developers"}
                onClick={handleItemClick}
              >
                <Icon name='address book' />
                DEVELOPERS
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Fragment>
    </Fragment>
  );
};

export default AuthNavbar;
