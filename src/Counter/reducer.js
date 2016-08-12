// @flow
import Actions from './Actions';
import Action from '../Action';

export default function reducer(counter: number = 0, action: Action): number {
  if (action instanceof Actions.Increment) {
    return counter + 1;
  } else if (action instanceof Actions.Decrement) {
    return counter - 1;
  } else {
    return counter;
  }
}
