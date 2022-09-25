import { createStore, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createHashHistory(),
  basename: '',
});

const middlewares = [routerMiddleware, thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

export const store = createStore(
  createRootReducer(routerReducer),
  applyMiddleware(...middlewares),
);

export const history = createReduxHistory(store);
