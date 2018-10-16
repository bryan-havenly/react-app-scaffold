import * as actionTypes from 'historyRoutingBased/constants/actionTypes';
import createReducer    from 'shared/lib/createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.SET_QUERY]: (state, { query }) => Immutable.fromJS(query),
});
