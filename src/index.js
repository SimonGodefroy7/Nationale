import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import langReducer from './redux/reducers/langReducer';

const store = createStore(langReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
