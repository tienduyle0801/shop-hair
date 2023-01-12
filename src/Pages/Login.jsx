import React from "react";
import Header from '../components/atoms/Header/Header';
import { Page } from 'framework7-react';
import LoginWrapper from "../components/organisms/LoginWrapper/LoginForm";
import {useSelector} from 'react-redux'


const Login = () =>  {
  const userData = useSelector((state)=> state.user)  ;

    return (  <Page id="home" name="home">
    <Header />
    <LoginWrapper />
  </Page>);
}

export default Login;