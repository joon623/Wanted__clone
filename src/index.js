import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './Styles/GlobalStyles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Store/Reducers';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={{ ...theme }}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById('root')
);
