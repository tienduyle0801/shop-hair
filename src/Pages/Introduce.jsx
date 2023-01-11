import React from 'react';
import Header from '../components/atoms/Header/Header';
import { DATA_HEADER } from '../constants/constant';
import { Page } from 'framework7-react';
import IntroduceWrapper from '../components/organisms/IntroduceWrapper/IntroduceWrapper';
import { DATA_INTRODUCE } from '../constants/constant';
import TitleIntroduce from '../components/organisms/TitleIntroduce/TitleIntroduce';

function Introduce() {
  return (
    <Page id="home" name="home">
      <Header title={DATA_HEADER} />
      <TitleIntroduce />
      <IntroduceWrapper define_introduce={DATA_INTRODUCE} />
    </Page>
  );
}

export default Introduce;
