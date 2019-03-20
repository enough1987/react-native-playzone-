import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TableStyle';

export default class List extends React.Component {
  renderRow = (row, key) => (
      <View
        key={ key }
        style={ {
          ...styles.row,
          backgroundColor: key % 2 ? '#efefef' : '#fff'
        } }
      >
          {
            Object.keys(row).map((column, index) => (
              this.renderColumn(row[column], index, this.props.columnsWidth[index])
            ))
          }
      </View>
  )

  renderColumn = (column, key, width) => (
      <View
        key={ key }
        style={ { width, padding: 2 } }
      >
          <Text>
              { column }
          </Text>
      </View>
  )

  render () {
    return (
        <ScrollView style={ { flex: 1, padding: 5 } }>
            {
              this.props.items.map((row, index) => this.renderRow(row, index))
            }
        </ScrollView>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnsWidth: PropTypes.arrayOf(PropTypes.number).isRequired
};
