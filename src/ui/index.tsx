import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import './intl/i18n';
import App from './App';

const theme = createTheme({
  palette: {
    primary: blue,
    background: {
      default: '#ffff8d',
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('app-root'),
);

navigator.serviceWorker.register(
  new URL('./service-worker.js', import.meta.url),
  { type: 'module' },
);
