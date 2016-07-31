import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  createRootAndAppendToBody()
);

function createRootAndAppendToBody() {
  const root = document.createElement('div');
  root.id = 'extension-root';
  document.body.appendChild(root);
  return root;
}