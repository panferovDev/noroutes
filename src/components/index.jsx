import React from 'react';
import ReactDOMClient from 'react-dom/client';
import HomePage from './Pages/HomePage';
import '../index.css';
import TestPage from './Pages/TestPage';
import App from './App';

const container = document.getElementById('root');

const components = {
  '/': HomePage,
  '/test': TestPage,
};

const ComponentToRender = components[window.initState.path];

ReactDOMClient.hydrateRoot(
  container,
  <App {...window.initState}>
    <ComponentToRender {...window.initState} />
  </App>,
);
