import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';

export default class Contacts extends Component {
  render () {
    console.log('CONTACTS PAGE');
    return (
        <View style={ { flex: 1 } }>
            <Header navigation={ this.props.navigation } />
            <Text>
                CONTACTS PAGE
            </Text>
        </View>
    );
  }
}

Contacts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
