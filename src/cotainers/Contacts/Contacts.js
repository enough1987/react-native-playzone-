import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Contacts extends Component {
  render () {
    console.log('CONTACTS PAGE');
    return (
        <View style={ { flex: 1 } }>
            <Text>
                CONTACTS PAGE
            </Text>
        </View>
    );
  }
}
