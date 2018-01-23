import React from 'react';
import { connect } from 'react-redux';

@connect((state) => ({ info: state.info }))
export default class List extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'FETCH_SAGA',
      params: {
        url: 'api/list',
      },
    });
  }

  render() {
    const { info: { list = [], loading } } = this.props;
    return (
      <div>
        {loading ? 'loading...' : list.map(item => <div key={item.id}>{item.id + item.name}</div>)}
      </div>
    );
  }
};
