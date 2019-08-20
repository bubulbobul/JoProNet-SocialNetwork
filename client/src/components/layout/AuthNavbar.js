import React, { useState, Fragment } from "react";
import { Menu, Container, Icon, Image, Message } from "semantic-ui-react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import TopSidebar from "./TopSidebar";
import Logo from "../../assets/images/logo.jpg";

const AuthNavbar = ({ alerts }) => {
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
            zIndex: "10"
          }}
        >
          <Container>
            <Menu.Item
              as={NavLink}
              to='/dashboard'
              name='dashboard'
              active={activeItem === "dashboard"}
              onClick={handleItemClick}
            >
              <Image circular src={Logo} size='tiny' />{" "}
            </Menu.Item>
            <Fragment>
              {alerts !== null &&
                alerts.length > 0 &&
                alerts.map(alert => (
                  <Fragment key={alert.id}>
                    {alert.alertType === "success" && (
                      <Menu.Item>
                        <Message positive>
                          <Message.Header>{alert.msgHeader}</Message.Header>
                          <p>{alert.msgContent}</p>
                        </Message>
                      </Menu.Item>
                    )}
                  </Fragment>
                ))}
            </Fragment>
            <Fragment>
              {alerts !== null &&
                alerts.length > 0 &&
                alerts.map(alert => (
                  <Fragment key={alert.id}>
                    {alert.alertType === "error" && (
                      <Menu.Item>
                        <Message error>
                          <Message.Header>{alert.msgHeader}</Message.Header>
                          <p>{alert.msgContent}</p>
                        </Message>
                      </Menu.Item>
                    )}
                  </Fragment>
                ))}
            </Fragment>
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

const mapStateToProps = state => ({
  alerts: state.alert,
  auth: state.auth
});

export default connect(mapStateToProps)(AuthNavbar);
