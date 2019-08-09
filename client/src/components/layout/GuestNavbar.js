import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Menu,
  Icon,
  Image,
  Segment,
  Button,
  Container
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Logo from "./logo.jpg";

const GuestNavbar = () => {
  const [active, setActive] = useState({
    activeItem: ""
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;
  return (
    <React.Fragment>
      <Menu inverted size='small' stackable>
        <Container>
          <Menu.Item
            as={NavLink}
            to='/'
            name='welcome'
            active={activeItem === "welcome"}
            onClick={handleItemClick}
          >
            <Segment style={{ background: "white", padding: "0" }} size='mini'>
              <Image circular src={Logo} size='tiny' />{" "}
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
              <Button
                animated='fade'
                floated='right'
                onClick={handleItemClick}
                color='teal'
              >
                <Button.Content visible>COMMUNITY</Button.Content>
                <Button.Content hidden>
                  <Icon name='users' />
                </Button.Content>
              </Button>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/join-us'
              name='join us'
              active={activeItem === "join us"}
              onClick={handleItemClick}
            >
              <Button
                animated='fade'
                floated='right'
                onClick={handleItemClick}
                color='teal'
              >
                <Button.Content visible>JOIN US</Button.Content>
                <Button.Content hidden>
                  <Icon name='lock' />
                </Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </React.Fragment>
  );
};
export default GuestNavbar;
