/* @flow */
import React, {Component} from 'react';
import './Counter.css';
import {connect} from 'react-redux';
import * as action from "../actions";
import type {Dispatch} from 'redux';

class Counter extends Component {
  props:{
    counter: number,
    dispatch: Dispatch
  };

  render() {
    var {counter, dispatch} = this.props;
    return (
        <div className="Counter">
          <div>
            <button onClick={() => dispatch(action.decrement())
          }>-
            </button>
            {counter}
            <button onClick={() => dispatch(action.increment())
          }>+
            </button>
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
