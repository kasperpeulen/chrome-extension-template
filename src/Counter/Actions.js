// @flow
import {Action} from 'redux-support-action-class';

// abstract
class CounterAction extends Action {}

class Increment extends CounterAction {}
class Decrement extends CounterAction {}

export default {Decrement, Increment};
