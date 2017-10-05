import { connect }            from 'react-redux';
import mapStateToProps        from './mapStateToProps';
import mapDispatchToProps     from './mapDispatchToProps';

// this very dumb container just includes the entire app state.
// it's not ideal, but at our scale, it's good enough
export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
