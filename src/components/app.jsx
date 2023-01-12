import React from 'react';
import routes from '../js/router';
import { App, f7, View } from 'framework7-react';
import { Provider } from 'react-redux';
import { store } from '../store';
const MyApp = () => {
  const offline = () => {
    f7.dialog.alert(t('dev-0023'));
  };

  const online = () => {
    f7.dialog.close();
  };

  const params = {
    name: 'Shop-Hair',
    theme: 'auto',
    routes: routes,
    on: {
      offline: offline,
      online: online
    },
    dialog: {
      usernamePlaceholder: 'Phone'
    }
  };

  return (
    <Provider store={store}>
      <App {...params}>
      <View browserHistory={true} browserHistorySeparator={''} main className="hair-shop" />
    </App>
    </Provider>
  );
};

export default MyApp;
