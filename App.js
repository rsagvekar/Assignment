import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import MainNavigator from './src/Navigation/MainNavigator';

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);

export default App;
