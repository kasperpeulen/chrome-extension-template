// @flow
import Action from './Action';
import Counter from './Counter';

function rootReducer(state: any = {}, action: Action) {
  return {
    counter: Counter.reducer(state.counter, action)
  }
}

export default rootReducer;
