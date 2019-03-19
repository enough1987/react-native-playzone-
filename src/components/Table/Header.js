import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  renderColumn = (column, key) => (
      <View
        key={ key }
        style={ { width: 55, padding: 2 } }
      >
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
                  this.props.items.map((column, index) => (
                    this.renderColumn(column, index)
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
