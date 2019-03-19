import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  renderRow = (row, key) => (
      <View
        key={ key }
        style={ {
          flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1
        } }
      >
          {
            Object.keys(row).map((column, index) => (
              this.renderColumn(row[column])
            ))
          }
      </View>
  )

  renderColumn = (column, key) => (
      <View key={ key } style={ { width: 55, padding: 2 } }>
          <Text>
              { column }
          </Text>
      </View>
  )

  render () {
    return (
        <ScrollView
          style={ { padding: 5 } }
        >
            {
              this.props.items.map((row, index) => this.renderRow(row))
            }
        </ScrollView>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
