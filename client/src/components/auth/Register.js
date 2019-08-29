import React, { useState } from "react";

import { Form, Button } from "semantic-ui-react";

const Register = ({ apiUrl, registerAct, setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  const [error, setError] = useState(false)
  const { name, email, password, passwordConfirmation } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setAlert("Password Error", "Password do not match", "error");
    } else if (isFormEmpty()) {
      setError(true)
    } else {
      registerAct(apiUrl, name, email, password);
    }
  };

  const isFormEmpty = () => {
    return !formData.name.length || !formData.email.length || !formData.password.length || !formData.passwordConfirmation.length;
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Input
        icon='user'
        iconPosition='left'
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => handleChange(e)}
        error={error}
        required
      />
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
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={e => handleChange(e)}
        error={error}
      />
      <Form.Input
        icon='redo'
        iconPosition='left'
        type='password'
        placeholder='Password Confirmation'
        name='passwordConfirmation'
        value={passwordConfirmation}
        onChange={e => handleChange(e)}
        error={error}
      />

      <Button content='Register' primary />
    </Form>
  );
};

export default Register;
