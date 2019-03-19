import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

export default class Home extends Component {
  render () {
    console.log('HOME PAGE');
    return (
        <View style={ { flex: 1 } }>
            <Header navigation={ this.props.navigation } />
            <Table />
        </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
