import * as propTypes                      from 'generic/constants/propTypes';
import containerFactory                    from 'generic/containers/factory';
import React, { PureComponent, PropTypes } from 'react';
import styles                              from './styles';

export default containerFactory(
  class App extends PureComponent {
    static propTypes = {
    }

    render() {
      return (
        <div className={ styles.Root }>
          Hello World!
        </div>
      );
    }
  },
);
