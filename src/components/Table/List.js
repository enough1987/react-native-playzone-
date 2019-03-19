import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  renderRow = row => (
      <View style={ { flex: 1, alignSelf: 'stretch', flexDirection: 'row' } }>
          {
            Object.keys(row).map(column => (
              this.renderColumn(row[column])
            ))
          }
      </View>
  )

  renderColumn = column => (
      <View style={ { width: 100 } }>
          <Text>
              { column }
          </Text>
      </View>
  )

  render () {
    return (
        <ScrollView style={ { } }>
            {
              this.props.items.map(row => this.renderRow(row))
            }
        </ScrollView>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
