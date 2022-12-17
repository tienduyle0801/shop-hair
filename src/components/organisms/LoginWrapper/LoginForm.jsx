import React from 'react';
import { LoginScreen, Page, LoginScreenTitle, ListInput, List, ListButton } from 'framework7-react';
import './LoginForm.scss';

const LoginForm = ({ open, handleClose }) => {
  return (
    <LoginScreen className="demo-login-screen" opened={open}>
      <List form className="form-login">
        <LoginScreenTitle>Framework7</LoginScreenTitle>
        <ListInput label="Username" type="text" placeholder="Your username" />
        <ListInput label="Password" type="password" placeholder="Your password" />
        <ListButton>Sign In</ListButton>
        <ListButton onClick={handleClose}>Cancel</ListButton>
      </List>
    </LoginScreen>
  );
};

export default LoginForm;
