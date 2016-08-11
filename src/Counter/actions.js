import ActionTypes from './ActionTypes';

export type Increment = {
  type: 'Increment'
}

function incrementCounter(): Increment {
  return {
    type: ActionTypes.increment
  }
}

export type Decrement = {
  type: 'Decrement'
}

function decrementCounter(): Decrement {
  return {
    type: ActionTypes.decrement
  }
}

export default {incrementCounter, decrementCounter};
