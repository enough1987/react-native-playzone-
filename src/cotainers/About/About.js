import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class About extends Component {
  render () {
    console.log('ABOUT PAGE');
    return (
        <View style={ { flex: 1 } }>
            <Text>
                ABOUT PAGE
            </Text>
        </View>
    );
  }
}
