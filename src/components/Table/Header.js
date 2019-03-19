import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  renderColumn = column => (
      <View style={ { width: 55, padding: 2 } }>
          <Text>
              { column.label }
          </Text>
      </View>
  )

  render () {
    return (
        <ScrollView
          style={ { padding: 5, backgroundColor: 'grey' } }
        >
            <View
              style={ {
                flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1
              } }
            >
                {
                  this.props.items.map(column => (
                    this.renderColumn(column)
                  ))
                }
            </View>
        </ScrollView>
    );
  }
}

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
