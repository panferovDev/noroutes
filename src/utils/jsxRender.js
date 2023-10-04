import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';
import App from '../components/App';

export default function jsxRender(pathToFile, initState, cb) {
  import(pathToFile).then((module) => {
    const Component = module.default;
    const element = React.createElement(
      Layout,
      { initState },
      React.createElement(
        App,
        { ...initState },
        React.createElement(Component, { ...initState }),
      ),
    );
    const html = renderToString(element);
    return cb(null, `<!DOCTYPE html>${html}`);
  }).catch((error) => cb(error));
}
