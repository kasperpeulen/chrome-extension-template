// @flow
import {Action} from "redux-support-action-class";
import Counter from './Counter';
import type {State as CounterState} from './Counter';

export type State = {
  Counter: CounterState,
  title: string
}

export const initialState = {
  Counter: Counter.initialState,
  title: 'This page is hijacked!!'
};

function rootReducer(state: State = initialState, action: Action) {
  return {
    Counter: Counter.reducer(state.Counter, action),
    title: state.title
  }
}

export default rootReducer;
