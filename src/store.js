// @flow
import rootReducer from './reducer';
import {compose, createStore, applyMiddleware} from 'redux';
import {
  supportActionClassEnhancer,
  supportActionClassMiddleware
} from "redux-support-action-class";
import Action from './Action';
import Actions from './Actions';

export const store = createStore(
  rootReducer,
  {},
  compose(
    supportActionClassEnhancer(Actions),
    applyMiddleware(supportActionClassMiddleware(Action)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
