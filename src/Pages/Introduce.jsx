import React from 'react';
import Header from '../components/atoms/Header/Header';
import { Page } from 'framework7-react';
import IntroduceWrapper from '../components/organisms/IntroduceWrapper/IntroduceWrapper';
import { DATA_INTRODUCE } from '../constants/constant';
import TitleIntroduce from '../components/organisms/TitleIntroduce/TitleIntroduce';

function Introduce() {
  return (
    <Page id="introduce" name="introduce">
      <Header />
      <TitleIntroduce />
      <IntroduceWrapper define_introduce={DATA_INTRODUCE} />
    </Page>
  );
}

export default Introduce;
