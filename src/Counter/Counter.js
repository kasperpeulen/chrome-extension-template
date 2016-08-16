// @flow
import React from 'react';
import {connect} from 'react-redux';
import * as Actions from "./Actions";
import {Action} from "redux-support-action-class";
import type {State} from '../reducer';
import type {Connector} from 'react-redux';
import type {Dispatch} from 'redux';

import './Counter.scss';

type Props = {
  show: boolean,
  value: number,
  dispatch: Dispatch<State, Action>
}

const connector: Connector<{}, Props> = connect(
  ({Counter}: State) => {
    const {show, value} = Counter;
    return {show, value};
  }
);

export default connector(
  ({show, value, dispatch}: Props) => {
    if (!show) return null;
    return (
      <div className="Counter">
        <div
          style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{flex: 1}}></div>
          <div>
            {value}
          </div>
          <div>
            <button onClick={() => dispatch(new Actions.Decrement())}>-</button>
            <button onClick={() => dispatch(new Actions.Increment())}>+</button>
          </div>
          <div style={{flex: 1}}></div>
        </div>
      </div>
    );
  }
);
