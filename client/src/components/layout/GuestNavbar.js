import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Menu,
  Icon,
  Image,
  Segment,
  Button,
  Container,
  Header
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Logo from "../../assets/images/logo.jpg";

const GuestNavbar = () => {
  const [active, setActive] = useState({
    activeItem: ""
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;
  return (
    <React.Fragment>
      <Menu
        size='small'
        // color='violet'
        stackable
        // inverted
        // style={{ background: "#4c3c4c" }}
      >
        <Container>
          <Menu.Item
            as={NavLink}
            to='/'
            name='welcome'
            active={activeItem === "welcome"}
            onClick={handleItemClick}
          >
            <Segment style={{ background: "white", padding: "0" }} size='mini'>
              <Image circular src={Logo} size='tiny' />
            </Segment>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink}
              to='/profiles'
              name='profiles'
              active={activeItem === "profiles"}
              onClick={handleItemClick}
            >
              COMMUNITY
              {/* <Header style={{ color: "white" }}>COMMUNITY</Header> */}
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/join-us'
              name='join us'
              active={activeItem === "join us"}
              onClick={handleItemClick}
            >
              JOIN US
              {/* <Header style={{ color: "white" }}>JOIN US</Header> */}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </React.Fragment>
  );
};
export default GuestNavbar;
