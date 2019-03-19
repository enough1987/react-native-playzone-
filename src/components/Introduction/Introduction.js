import React from 'react';
import { Text, View } from 'react-native';

const staticText = "We are experiencing Kanban development, with the from Technical Radar project in EPAM's contribute site.";

export default class Introduction extends React.Component {
  render () {
    return (
        <View style={ { flex: 1 } }>
            <Text>Introduction</Text>
            <Text>
                { staticText }
            </Text>
        </View>
    );
  }
}
