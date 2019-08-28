import React, { useState, Fragment } from "react";
import { Form, Button, Header, Divider } from "semantic-ui-react";

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
      loginAct(apiUrl, email, password);
    }
  };

  const isFormEmpty = (email, password) => {
    return !formData.email.length || !formData.password.length;
  };

  return (
    <Fragment>
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
        <Button content='Login' primary floated="left" />
      </Form>
    </Fragment>
  );
};

export default Login;
