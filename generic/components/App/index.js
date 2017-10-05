import containerFactory                    from 'newApp/containers/factory';
import React, { PureComponent, PropTypes } from 'react';
import styles                              from './styles';

export default containerFactory(
  class App extends PureComponent {

    static propTypes = {
    }

    state = {
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
