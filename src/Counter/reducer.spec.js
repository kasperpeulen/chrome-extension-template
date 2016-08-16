import {Action} from "redux-support-action-class";
import {counterReducer} from './reducer';
import * as Actions from './Actions';

describe('counterReducer', () => {
  it('increments', () => {
    var state = counterReducer(0, new Actions.Increment());
    expect(state).toEqual(1);
  });

  it('decrements', () => {
    var state = counterReducer(1, new Actions.Decrement());
    expect(state).toEqual(0);
  });

  it('stays the same with other action', () => {
    class Other extends Action {}
    var state = counterReducer(1, new Other());
    expect(state).toEqual(1);
  });
});
