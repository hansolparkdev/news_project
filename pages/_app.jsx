/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';
import store from '../redux/store';

const RootApp = ({ Component, store }) => (
  <Provider store={store}>
    <Component />
  </Provider>
);

// RootApp.propTypes = {
//   Component: PropTypes.node.isRequired,
//   store: PropTypes.node.isRequired,
// };
export default withRedux(() => (store))(RootApp);
