import React from 'react';
import { Page } from 'framework7-react';
import Header from '../components/atoms/Header/Header';
import { DATA_HEADER } from '../constants/constant';
import TrangChu from '../components/atoms/TrangChu/TrangChu';
import { DATA_SLIDE } from '../constants/constant';

const HomePage = () => {
  return (
    <Page id="home" name="home">
      <Header title={DATA_HEADER} />
      <TrangChu slide={DATA_SLIDE} />
    </Page>
  );
};

export default HomePage;
