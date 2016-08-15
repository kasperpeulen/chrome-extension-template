// @flow
import actions from './Actions';
import reducer, {initialState} from './reducer';
import type {State} from './reducer';
import Component from './Counter';

export const Counter = Component;
export default {actions, reducer, initialState};
export type {State};
