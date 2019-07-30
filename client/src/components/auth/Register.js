import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertAct";

import { Link } from "react-router-dom";

import {
  Grid,
  Segment,
  Form,
  Header,
  Icon,
  Button,
  Message
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Register = props => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  const [errorUseState, setError] = useState({
    error: false,
    errorHeader: "",
    errorMessage: ""
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
    } else if (isFormEmpty()) {
      console.log("Please fill all the form");
      props.setAlert("Error empty form", "Please fill all the form", "error");
      setError({
        ...errorUseState,
        error: true,
        errorHeader: "Error empty form",
        errorMessage: "Please fill all the form"
      });
    } else {
      console.log(formData);
    }
  };

  const isFormEmpty = (name, email, password, passwordConfirmation) => {
    return (
      !formData.name.length ||
      !formData.email.length ||
      !formData.password.length ||
      !formData.passwordConfirmation.length
    );
  };

  // console.log(props.alerts);
  return (
    <Grid textAlign='center' style={{ height: "80vh" }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Icon name='signup' /> Get Register & Enjoy
        </Header>
        <Form size='large' onSubmit={e => handleSubmit(e)}>
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

            <Button color='teal' fluid size='large'>
              Login
            </Button>
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
  );
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  { setAlert }
)(Register);
