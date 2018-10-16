import Immutable      from 'immutable';
import queryResolvers from 'historyRoutingBased/lib/queryResolvers';

const initialState = {};

// this looks weird but it lets us keep all the query info in one place
Object.keys(queryResolvers).forEach(key => {
  initialState[key] = queryResolvers[key](undefined, []);
});

export default Immutable.fromJS(initialState);
