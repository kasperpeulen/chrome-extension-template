// @flow
import {Action} from 'redux-support-action-class';
import Actions from './Actions';

export type State = {
  value: number,
  show: boolean
}

export const initialState = {
  value: 0,
  show: true
};

export default function reducer(state: State = initialState, action: Action): State {
  return {
    value: counterReducer(state.value, action),
    show: showReducer(state.show, action)
  }
}

export function counterReducer(counter: number, action: Action): number {
  if (action instanceof Actions.Increment) {
    return counter + 1;
  } else if (action instanceof Actions.Decrement) {
    return counter - 1;
  } else {
    return counter;
  }
}

function showReducer(show: boolean, action: Action): boolean {
  if (action instanceof Actions.Hide) {
    return false;
  } else if (action instanceof Actions.Show) {
    return true;
  } else if (action instanceof Actions.Toggle) {
    return !show;
  } else {
    return show;
  }
}