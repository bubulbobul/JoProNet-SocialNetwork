import React, { useState, Fragment } from "react";
import { Form, Button, Header, Segment, Divider } from "semantic-ui-react";

const Login = ({ apiUrl, loginAct, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormEmpty()) {
      setAlert(
        "Error Credientials",
        "Please enter you Email and Password",
        "error"
      );
    } else {
      // console.log(formData);
      loginAct(apiUrl, email, password);
    }
  };

  const isFormEmpty = (email, password) => {
    return !formData.email.length || !formData.password.length;
  };

  return (
    <Fragment>
      <Header as='h3' textAlign='center'>
        Log-in to your account
      </Header>
      <Divider hidden />
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Input
          icon='at'
          iconPosition='left'
          placeholder='Email'
          name='email'
          value={email}
          onChange={e => handleChange(e)}
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          name='password'
          value={password}
          onChange={e => handleChange(e)}
        />

        <Button content='Login' primary />
      </Form>
    </Fragment>
  );
};

export default Login;
