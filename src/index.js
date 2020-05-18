import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

const __MODULE_DATA__ = JSON.parse(
  document.querySelector('[type="application/json"]').textContent,
);
const root = document.getElementById('cms-react-boilerplate__App');
const portalId = Number(root.dataset.portalId);

ReactDOM.render(
  <ErrorBoundary>
    <App portalId={portalId} moduleData={__MODULE_DATA__} />
  </ErrorBoundary>,
  root,
);
