import React from 'react';
import { ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';

const widths = [80, 65, 65, 110];

export default class Table extends React.Component {
  render () {
    return (
        <ScrollView style={ { flex: 1 } }>
            <Header
              columnsWidth={ widths }
              items={ this.props.headers }
            />
            {
              this.props.data
                ? (
                    <List
                      columnsWidth={ widths }
                      items={ this.props.data }
                    />
                )
                : <Text> Please search </Text>
            }
        </ScrollView>
    );
  }
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
