/* eslint-disable no-console */
import React, { useEffect } from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import {
  HELLO_REQUEST,
} from '../redux/reducers/newsReducer';
import Layout from '../components/Layout';


const Index = () => {
  // console.log('index');
  const hello = useSelector((state) => state.news);
  // console.log(hello);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: HELLO_REQUEST });
  }, []);
  return (
    <Layout>
      {hello.hello === ''
        ? 'loading'
        : hello.hello}
    </Layout>
  );
};

export default Index;
