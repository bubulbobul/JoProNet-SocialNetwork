import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Menu, Image, Segment, Container } from "semantic-ui-react";
import Logo from "../../assets/images/logo.jpg";

const GuestNavbar = () => {
  const [active, setActive] = useState({
    activeItem: ""
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;
  return (
    <React.Fragment>
      <Menu size='small' fixed='top' stackable>
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
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to='/join-us'
              name='join us'
              active={activeItem === "join us"}
              onClick={handleItemClick}
            >
              JOIN US
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </React.Fragment>
  );
};
export default GuestNavbar;
