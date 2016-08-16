// @flow
import {Action} from "redux-support-action-class";

// abstract
class CounterAction extends Action {}

export class Increment extends CounterAction {}
export class Decrement extends CounterAction {}
export class Hide extends CounterAction {}
export class Show extends CounterAction {}
export class Toggle extends CounterAction {}
