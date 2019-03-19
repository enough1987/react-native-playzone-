import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Introduction from '../../components/Introduction/Introduction';
import Feature from '../../components/Feature/Feature';

export default class About extends Component {
  render () {
    console.log('ABOUT PAGE');
    return (
        <ScrollView style={ { flex: 1 } }>
            <Header navigation={ this.props.navigation } />
            <View style={ { flex: 1 } }>
                <Introduction />
                <Feature />
            </View>
        </ScrollView>
    );
  }
}

About.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
