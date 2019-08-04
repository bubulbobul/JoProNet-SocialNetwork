import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const GuestNavbar = () => {
  const [active, setActive] = useState({
    activeItem: ""
  });

  const handleItemClick = (e, { name }) => setActive({ activeItem: name });

  const { activeItem } = active;
  return (
    <React.Fragment>
      <Menu inverted size='huge' stackable>
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
            content='DEVELOPERS'
            onClick={handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/register'
            name='register'
            active={activeItem === "register"}
            content='REGISTER'
            onClick={handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/login'
            name='login'
            active={activeItem === "login"}
            content='LOGIN'
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </React.Fragment>
  );
};
export default GuestNavbar;
