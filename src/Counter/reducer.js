import ActionTypes from "./ActionTypes";

export default function reducer(counter: number = 0, action: Action): number {
  if (action.type === ActionTypes.increment) {
    return counter + 1;
  } else if (action.type === ActionTypes.decrement) {
    return counter - 1;
  }
  return counter;
}
