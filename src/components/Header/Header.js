import React from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render () {
    console.log(' ---- ', this.props);

    return (
        <View style={ { flexDirection: 'row' } }>
            <Button
              title="Home"
              onPress={ () => this.props.navigation.navigate('Home') }
            />
            <Button
              title="Trends"
              onPress={ () => this.props.navigation.navigate('Trends') }
            />
            <Button
              title="About"
              onPress={ () => this.props.navigation.navigate('About') }
            />
            <Button
              title="Contacts"
              onPress={ () => this.props.navigation.navigate('Contacts') }
            />
        </View>
    );
  }
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
