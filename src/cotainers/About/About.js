import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Introduction from '../../components/Introduction/Introduction';
import Feature from '../../components/Feature/Feature';

import styles from './AboutStyle';

export default class About extends Component {
  render () {
    console.log('ABOUT PAGE');
    return (
        <ScrollView style={styles.about}>
            <Introduction />
            <Feature />
        </ScrollView>
    );
  }
}

About.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
