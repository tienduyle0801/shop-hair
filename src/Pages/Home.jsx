import React, { useState } from 'react';
import { Page } from 'framework7-react';
import Header from '../components/atoms/Header/Header';
import { DATA_HEADER } from '../constants/constant';
import HomeWrapper from '../components/organisms/HomeWrapper/HomeWrapper';
import { DATA_SLIDE } from '../constants/constant';
import LoginForm from '../components/organisms/LoginWrapper/LoginForm';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const openLoginForm = () => {
    setOpen(true);
  };

  return (
    <Page id="home" name="home">
      <Header title={DATA_HEADER} LoginForm={openLoginForm} />
      <LoginForm open={open} handleClose={() => setOpen(false)} />
      <HomeWrapper slide={DATA_SLIDE} />
    </Page>
  );
};

export default HomePage;
