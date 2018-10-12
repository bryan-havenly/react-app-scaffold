import { PropTypes }      from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const actions = PropTypes.objectOf(PropTypes.func);

export const query = ImmutablePropTypes.contains({});
