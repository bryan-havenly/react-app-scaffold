import { bindActionCreators } from 'redux';
import queryActionCreators    from 'historyRoutingBased/actionCreators/query';

export default dispatch => ({
  queryActions : bindActionCreators(queryActionCreators, dispatch),
});
