// @flow
import * as Actions from './Actions';
import reducer, {initialState} from './reducer';
import type {State} from './reducer';
import Component from './Counter';

export const Counter = Component;
export default {Actions, reducer, initialState};
export type {State};
