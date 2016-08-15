// @flow
import rootReducer from './reducer';
import {compose, createStore, applyMiddleware} from 'redux';
import {
  supportActionClassEnhancer,
  supportActionClassMiddleware,
  Action
} from "redux-support-action-class";

import Actions from './Actions';

export const store = createStore(
  rootReducer,
  compose(
    supportActionClassEnhancer(Actions),
    applyMiddleware(supportActionClassMiddleware(Action)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
