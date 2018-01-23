import { combineReducers } from 'redux';
import Count from '../reducers/count';
import info from '../reducers/info';

export default combineReducers({
  Count,
  info,
});
