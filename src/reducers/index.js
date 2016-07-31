/* @flow */

import * as ActionTypes from "../actions/action_type_constants";
import type {Action} from '../actions';

function rootReducer(state: any = {}, action: Action) {
  return {
    counter: counterReducer(state.counter, action)
  }
}

function counterReducer(counter: number = 0, action: Action): number {
  if (action.type === ActionTypes.increment) {
    return counter + 1;
  } else if (action.type === ActionTypes.decrement) {
    return counter - 1;
  }
  return counter;
}

export default rootReducer;
