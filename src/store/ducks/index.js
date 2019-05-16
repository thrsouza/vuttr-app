import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as tools } from './tools';

export default history => combineReducers({
  router: connectRouter(history),
  tools,
});
