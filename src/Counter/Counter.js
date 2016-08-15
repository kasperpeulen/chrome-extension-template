// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Action from "./Actions";
import './Counter.scss';

class Counter extends Component {
  render() {
    const {show, value, dispatch} = this.props;
    if (!show) return null;
    return (
      <div className="Counter">
        <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{flex: 1}}> </div>
          <div>
            {value}
          </div>
          <div>
            <button onClick={() => dispatch(new Action.Decrement())}>-</button>
            <button onClick={() => dispatch(new Action.Increment())}>+</button>
          </div>
          <div style={{flex: 1}}> </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({Counter}) => {
    const {show, value} = Counter;
    return {show, value}
  }
)(Counter);
