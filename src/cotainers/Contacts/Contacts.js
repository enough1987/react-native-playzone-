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
            <Text>Contact Us</Text>
            <View>
                <Text>EPAM GitHub Radar Delivery Team</Text>
                <Text>
                        3/F, Block 5, Vision Shenzhen Business Park,9th Gaoxin South Road,
                        /n Shenzhen Hi-tech Industrial Park,Nanshan District,
                        /n Shenzhen,Guangdong, China 518057

                </Text>
                <Text>
                    <Text>MAP</Text>
                </Text>
                <Text> P: +86-755-36899008</Text>
            </View>
        </View>
    );
  }
}

Contacts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
