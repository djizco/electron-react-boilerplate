import React from 'react';

import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import configureStore from './store/configureStore';

import './styles/main.scss';
import './assets/icons/favicon.ico';
import './assets/images/bg-texture.jpg';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
