import React, { useState, Fragment } from "react";
import { Form, Button } from "semantic-ui-react";

const Login = ({ apiUrl, loginAct }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(false)
  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormEmpty()) {
      setError(true)
    } else {
      loginAct(apiUrl, email, password);
      setError(false)
    }
  };

  const isFormEmpty = () => {
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
          error={error}
          required
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          name='password'
          value={password}
          onChange={e => handleChange(e)}
          error={error}
          required
        />
        <Button content='Login' primary floated="left" />
      </Form>
    </Fragment>
  );
};

export default Login;
