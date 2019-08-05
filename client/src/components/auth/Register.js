import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertAct";
import { registerAct } from "../../actions/authAct";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import {
  Grid,
  Segment,
  Form,
  Header,
  Icon,
  Button,
  Message,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Register = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const { name, email, password, passwordConfirmation } = formData;
  const { alerts } = props;
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      // console.log("Passwords do not match");
      props.setAlert("Password Error", "Password do not match", "error");
    } else {
      // console.log(formData);
      props.registerAct(props.apiUrl, name, email, password);
    }
    // props.registerAct({ name, email, password });
  };

  const handleReset = e => {
    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    });
  };

  // Redirect if LOGGED IN
  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  console.log(props.apiUrl);
  return (
    <Fragment>
      <Divider hidden />
      <Divider hidden />
      <Grid
        textAlign='center'
        // style={{ height: "80vh" }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Icon name='signup' /> Get Register & Enjoy
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Name'
                name='name'
                value={name}
                onChange={e => handleChange(e)}
              />
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                name='email'
                value={email}
                onChange={e => handleChange(e)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                value={password}
                onChange={e => handleChange(e)}
              />
              <Form.Input
                fluid
                icon='redo'
                iconPosition='left'
                placeholder='Confirm your password'
                type='password'
                name='passwordConfirmation'
                value={passwordConfirmation}
                onChange={e => handleChange(e)}
              />
              <Segment raised color='teal'>
                <Form.Group>
                  <Button
                    color='teal'
                    fluid
                    size='large'
                    onClick={e => handleSubmit(e)}
                  >
                    Register
                  </Button>
                  <Button
                    color='teal'
                    fluid
                    size='large'
                    onClick={e => handleReset(e)}
                  >
                    Cancel
                  </Button>
                </Form.Group>
              </Segment>
            </Segment>
          </Form>
          {alerts !== null &&
            alerts.length > 0 &&
            alerts.map(alert => (
              <React.Fragment key={alert.id}>
                {alert.alertType === "error" ? (
                  <Message error>
                    <Message.Header>{alert.msgHeader}</Message.Header>
                    <p>{alert.msgContent}</p>
                  </Message>
                ) : (
                  <div style={{ display: "none" }} />
                )}
              </React.Fragment>
            ))}
          <Message>
            Already have an account ? <Link to='/login'>Get Logged-in</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerAct: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  alerts: state.alert,
  apiUrl: state.apiUrl.apiUrl,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => {
  return {
    setAlert: () => {
      dispatch(setAlert());
    },
    registerAct: (apiUrl, name, email, password) => {
      dispatch(registerAct(apiUrl, name, email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
