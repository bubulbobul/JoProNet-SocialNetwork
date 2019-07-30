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

const Login = props => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const { alerts } = props;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormEmpty()) {
      console.log("Please enter you Email and Password");
      props.setAlert(
        "Error Credientials",
        "Please enter you Email and Password",
        "error"
      );
    } else {
      console.log(formData);
    }
  };

  const isFormEmpty = (email, password) => {
    return !formData.email.length || !formData.password.length;
  };

  // console.log(props.alerts);
  return (
    <Grid textAlign='center' style={{ height: "80vh" }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Icon name='sign in' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={e => handleSubmit(e)}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
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
          New to us? <Link to='/register'>Sign Up</Link>
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
)(Login);
