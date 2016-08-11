/* @flow */
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);
export const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension());
