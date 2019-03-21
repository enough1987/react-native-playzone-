import React, { Component } from 'react';

import { View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './LoaderStyle';
import colors from '../../global/colors';

export default class Loader extends Component {
  render () {
    const {
      loading, errors, errorMsg, children
    } = this.props;

    let contant = null;

    if (loading) {
      contant = (
          <ActivityIndicator
            style={ styles.loader }
            size="large"
            color={ colors.lightBlue }
          />
      );
    } else if (errors) {
      contant = (
          <Text
            style={ styles.errors }
          >
              {' '}
              { errorMsg }
              {' '}
          </Text>
      );
    } else {
      contant = children;
    }

    return (
        <View style={ styles.container }>
            {contant}
        </View>
    );
  }
}

Loader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.bool,
  errorMsg: PropTypes.string
};

Loader.defaultProps = {
  loading: false,
  errors: false,
  errorMsg: 'Server is failing, try to check the Internet connection'
};
