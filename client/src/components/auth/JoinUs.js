import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertAct";
import { loginAct, registerAct } from "../../actions/authAct";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import LoginImg from "../../assets/images/login-logo.png";
import RegisterImg from "../../assets/images/register-logo.png";

import {
  Grid,
  Segment,
  Image,
  Header,
  Icon,
  Button,
  Message,
  Divider,
  Container,
  Transition
} from "semantic-ui-react";
import Login from "./Login";
import Register from "./Register";

const JoinUs = ({
  apiUrl,
  setAlert,
  loginAct,
  registerAct,
  alerts,
  isAuthenticated
}) => {
  const [formVisible, toggleFormVisible] = useState({
    login: true,
    register: false
  });
  const { login, register } = formVisible;

  // Redirect if LOGGED IN
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Fragment>
          {alerts !== null &&
            alerts.length > 0 &&
            alerts.map(alert => (
              <Fragment key={alert.id}>
                {alert.alertType === "success" && (
                  <Message positive>
                    <Message.Header>{alert.msgHeader}</Message.Header>
                    <p>{alert.msgContent}</p>
                  </Message>
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
                  <Message error>
                    <Message.Header>{alert.msgHeader}</Message.Header>
                    <p>{alert.msgContent}</p>
                  </Message>
                )}
              </Fragment>
            ))}
        </Fragment>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Row>
            <Grid.Column>
              <Fragment>
                <Segment raised>
                  <Divider
                    horizontal
                    onClick={() =>
                      toggleFormVisible({ login: !login, register: !register })
                    }
                  >
                    <Header as='h3'>
                      {login ? (
                        <Icon name='arrow alternate circle up' />
                      ) : (
                        <Icon name='arrow alternate circle down' />
                      )}
                      <Header.Content>Login</Header.Content>
                    </Header>
                  </Divider>
                </Segment>
              </Fragment>
            </Grid.Column>
            <Grid.Column>
              <Fragment>
                <Segment raised>
                  <Divider
                    horizontal
                    onClick={() =>
                      toggleFormVisible({ login: !login, register: !register })
                    }
                  >
                    <Header as='h3'>
                      {register ? (
                        <Icon name='arrow alternate circle up' />
                      ) : (
                        <Icon name='arrow alternate circle down' />
                      )}
                      <Header.Content>Register</Header.Content>
                    </Header>
                  </Divider>
                </Segment>
              </Fragment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Segment raised>
                <Transition
                  unmountOnHide={true}
                  visible={login}
                  animation='fade'
                  duration={100}
                  transitionOnMount={true}
                >
                  <Fragment>
                    <Login
                      apiUrl={apiUrl}
                      loginAct={loginAct}
                      setAlert={setAlert}
                    />
                  </Fragment>
                </Transition>

                <Fragment>
                  {register && (
                    <Image
                      src={LoginImg}
                      size='small'
                      centered
                      onClick={() =>
                        toggleFormVisible({
                          login: !login,
                          register: !register
                        })
                      }
                    />
                  )}
                </Fragment>
              </Segment>
            </Grid.Column>
            <Grid.Column verticalAlign='top'>
              <Segment raised>
                <Transition
                  unmountOnHide={true}
                  visible={register}
                  animation='fade'
                  duration={100}
                  transitionOnMount={true}
                >
                  <Fragment>
                    <Register
                      apiUrl={apiUrl}
                      registerAct={registerAct}
                      setAlert={setAlert}
                    />
                  </Fragment>
                </Transition>
                <Fragment>
                  {login && (
                    <Image
                      src={RegisterImg}
                      size='small'
                      centered
                      onClick={() =>
                        toggleFormVisible({
                          login: !login,
                          register: !register
                        })
                      }
                    />
                  )}
                </Fragment>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Container>
    </Fragment>
  );
};

JoinUs.protoType = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  registerAct: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  alerts: state.alert,
  apiUrl: state.apiUrl.apiUrl,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => {
  return {
    setAlert: (msgHeader, msgContent, alertType) => {
      dispatch(setAlert(msgHeader, msgContent, alertType));
    },
    loginAct: (apiUrl, email, password) => {
      dispatch(loginAct(apiUrl, email, password));
    },
    registerAct: (apiUrl, name, email, password) => {
      dispatch(registerAct(apiUrl, name, email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinUs);
