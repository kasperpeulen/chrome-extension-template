// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './Counter';
import {Provider} from 'react-redux';

import {store} from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>
    , createRootAndAppendToBody()
);

function createRootAndAppendToBody() {
  const root = document.createElement('div');
  root.id = 'extension-root';
  document.body.appendChild(root);
  return root;
}
