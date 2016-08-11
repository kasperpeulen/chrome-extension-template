// @flow
import type {Action} from './action';
import Counter from './Counter';


function rootReducer(state: any = {}, action: Action) {
  return {
    counter: Counter.reducer(state.counter, action)
  }
}

export default rootReducer;
