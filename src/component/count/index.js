import React from 'react';
import { connect } from 'react-redux';

@connect((state) => ({
  count: state.Count,
}))
export default class Count extends React.Component {

  render() {
    const { count, dispatch } = this.props;
    return <div>
      <div onClick={() => {
        dispatch({
          type: 'INCREASE',
        });
      }}>+</div>
      <div onClick={() => {
        dispatch({
          type: 'DECREASE',
        });
      }}>-</div>
      <div>{count}</div>
    </div>
  }
}
