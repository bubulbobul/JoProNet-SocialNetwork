import React, { Component } from "react";
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

export class Login extends Component {
  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: "80vh" }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Icon name='sign in' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/register'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
