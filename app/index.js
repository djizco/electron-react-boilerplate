import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import history from '_app/history';
import store from '_app/store';

import Root from '_environment/Root';

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
