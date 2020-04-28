import { combineReducers } from 'redux';

import todos from '../reducers/todos';

const reducers = {
  todos
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
