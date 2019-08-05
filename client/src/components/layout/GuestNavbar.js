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
              <Icon name='users' />
              COMMNITY
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/register'
              name='register'
              active={activeItem === "register"}
              onClick={handleItemClick}
            >
              <Button
                animated='fade'
                floated='right'
                onClick={handleItemClick}
                color='teal'
              >
                <Button.Content visible>SIGN UP</Button.Content>
                <Button.Content hidden>
                  <Icon name='signup' />
                </Button.Content>
              </Button>
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/login'
              name='login'
              active={activeItem === "login"}
            >
              <Button
                animated='fade'
                floated='right'
                onClick={handleItemClick}
                color='teal'
              >
                <Button.Content visible>LOGIN</Button.Content>
                <Button.Content hidden>
                  <Icon name='sign-in' />
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
