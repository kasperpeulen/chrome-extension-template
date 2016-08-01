/* @flow */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from "../actions";
import type {Dispatch} from 'redux';

import './Counter.scss';

class Counter extends Component {
  props:{
    counter: number,
    dispatch: Dispatch
  };

  render() {
    var {counter, dispatch} = this.props;
    return (
        <div className="Counter">
          <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{flex: 1}}> </div>
            <div>
              {counter}
            </div>
            <div>
              <button onClick={() => dispatch(action.decrementCounter())
          }>-
              </button>

              <button onClick={() => dispatch(action.incrementCounter())
          }>+
              </button>
            </div>
            <div style={{flex: 1}}> </div>
          </div>
        </div>
    );
  }
}

export default connect(
    ({counter}) => {
      return {
        counter
      }
    }
)(Counter);
