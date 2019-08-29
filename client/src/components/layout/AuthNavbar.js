import React, { useState, Fragment } from "react";
import { Menu, Container, Icon, Image } from "semantic-ui-react";

import { NavLink } from "react-router-dom";
import TopSidebar from "./TopSidebar";
import Logo from "../../assets/images/logo.jpg";

const AuthNavbar = () => {
  const [active, setActive] = useState({
    activeItem: ""
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;
  return (
    <Fragment>
      <TopSidebar />
      <Fragment>
        <Menu
          size='small'
          stackable
          style={{
            position: "fixed",
            width: "100vw",
            margin: "0",
            zIndex: "2",
            background: "white"
          }}
          pointing secondary
        >
          <Container>
            <Menu.Item
              as={NavLink}
              to='/dashboard'
              name='dashboard'
              active={activeItem === "dashboard"}
              onClick={handleItemClick}
              style={{ padding: "10px 0 5px 0" }}
            >
              <Image circular src={Logo} size='tiny' />{" "}
            </Menu.Item>
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
            <Menu.Menu position='right'>
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
              <Menu.Item
                as={NavLink}
                to='/mern'
                name='mern'
                active={activeItem === "mern"}
                onClick={handleItemClick}
              >
                MERN
            </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Fragment>
    </Fragment>
  );
};

export default AuthNavbar
