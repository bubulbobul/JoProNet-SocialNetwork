import React, { useState } from "react";
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorUseState, setError] = useState({
    error: false,
    errorHeader: "",
    errorMessage: ""
  });

  const { email, password } = formData;
  const { error, errorHeader, errorMessage } = errorUseState;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormEmpty()) {
      console.log("Please enter you Email and Password");
      setError({
        ...errorUseState,
        error: true,
        errorHeader: "Error credentials",
        errorMessage: "Please enter you Email and Password"
      });
    } else {
      console.log(formData);
    }
  };

  const isFormEmpty = (email, password) => {
    return !formData.email.length || !formData.password.length;
  };

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
        {error && (
          <Message error>
            <Message.Header>{errorHeader}</Message.Header>
            <p>{errorMessage}</p>
          </Message>
        )}
        <Message>
          New to us? <Link to='/register'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
