import { combineReducers } from 'redux-immutable';
import errors              from 'shared/concerns/errors/reducers';

export default combineReducers({
  errors,
});
