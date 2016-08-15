// @flow
import {Action} from 'redux-support-action-class';

// abstract
class CounterAction extends Action {}

class Increment extends CounterAction {}
class Decrement extends CounterAction {}
class Hide extends CounterAction {}
class Show extends CounterAction {}
class Toggle extends CounterAction {}

export default {Decrement, Increment, Hide, Show, Toggle};
