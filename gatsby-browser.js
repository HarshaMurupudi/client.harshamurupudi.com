import React from 'react';
import './src/styles/global.css';
import wrapWithProvider from './wrap-with-provider';

import Layout from './src/components/layout/AppLayout';

export const wrapRootElement = wrapWithProvider;
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById('___loader').style.display = 'none';
  }, 3000);
};
