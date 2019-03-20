import React from 'react';
import { Text, View } from 'react-native';
import styles from './IntroductionStyle';

const staticText = "We are experiencing Kanban development, with the from Technical Radar project in EPAM's contribute site.";

export default class Introduction extends React.Component {
  render () {
    return (
        <View style={styles.introduction}>
            <Text style={styles.title}>Introduction</Text>
            <Text style={styles.content}>
                { staticText }
            </Text>
        </View>
    );
  }
}
