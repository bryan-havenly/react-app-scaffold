import { createStore } from 'redux';
import combinedReducer from '../reducers';
import middlewares     from 'shared/store/middlewares';

export default createStore(
  combinedReducer,
  middlewares,
);
