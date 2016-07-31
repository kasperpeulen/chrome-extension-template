/* @flow */
import * as ActionTypes from './action_type_constants';

export type Increment = {
  type: 'Increment'
}

export function increment(): Increment {
  return {
    type: ActionTypes.increment
  }
}

export type Decrement = {
  type: 'Decrement'
}

export function decrement(): Decrement {
  return {
    type: ActionTypes.decrement
  }
}

export type Action = Increment | Decrement;