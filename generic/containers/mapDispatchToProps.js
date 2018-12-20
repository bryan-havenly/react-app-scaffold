import { bindActionCreators } from 'redux';
import errorActionCreators    from 'shared/concerns/errors/actionCreators';
import globalActionCreators   from 'generic/actionCreators/global';

export default dispatch => ({
  errorsActions : bindActionCreators(errorActionCreators, dispatch),
  globalActions : bindActionCreators(globalActionCreators, dispatch),
});
