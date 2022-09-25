import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import Main from '_environment/Main';

import theme from '_styles/js/theme';

export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </StyledEngineProvider>
      </HistoryRouter>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
