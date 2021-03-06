import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import PropTypes from 'prop-types'; import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './ContactsStyle';
import globalStyles from '../../global/globalStyle';
import colors from '../../global/colors';

export default class Contacts extends Component {
  render () {
    return (
        <View style={ globalStyles.pageContainer }>
            <Text style={ globalStyles.title }>Contact Us</Text>
            <View style={ styles.content }>
                <Text style={ styles.contentTitle }>EPAM GitHub Radar Delivery Team</Text>
                <Text style={ styles.contentAdd }>
                        3/F, Block 5, Vision Shenzhen Business Park,9th Gaoxin South Road,
                    {'\n'}
Shenzhen Hi-tech Industrial Park,Nanshan District,Shenzhen,Guangdong, China 518057

                </Text>
                <View style={ styles.contentMap }>
                    <FontAwesome5
                      name="map-marker-alt"
                      color={ colors.lightBlue }
                      size={ 20 }
                    />
                    <Text
                      style={ styles.contentMapDesc }
                      onPress={ () => Linking.openURL('http://j.map.baidu.com/U-9oO') }
                    >
                        MAP
                    </Text>
                </View>
                <View style={ styles.contentMobile }>
                    <FontAwesome5
                      name="mobile-alt"
                      color={ colors.lightBlue }
                      size={ 20 }
                    />
                    <Text
                      style={ styles.contentMobileNumber }
                      onPress={ () => Linking.openURL('tel:+86-755-36899008') }
                    >
                        +86-755-36899008
                    </Text>
                </View>
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
