/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import store from '../redux/store';
import 'react-day-picker/lib/style.css';

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
  }
`;

const RootApp = ({ Component, store }) => (
  <Provider store={store}>
    <Component />
    <GlobalStyle />
  </Provider>
);

// RootApp.propTypes = {
//   Component: PropTypes.node.isRequired,
//   store: PropTypes.node.isRequired,
// };
export default withRedux(() => (store))(RootApp);
