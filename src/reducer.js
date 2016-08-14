// @flow
import {Action} from 'redux-support-action-class';
import Counter from './Counter';

function rootReducer(state: any = {}, action: Action) {
  return {
    counter: Counter.reducer(state.counter, action)
  }
}

export default rootReducer;
