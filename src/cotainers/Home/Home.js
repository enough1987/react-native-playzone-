import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Home extends Component {
  render () {
    console.log('HOME PAGE');
    return (
        <View style={ { flex: 1 } }>
            <Text>
                HOME PAGE
            </Text>
        </View>
    );
  }
}
