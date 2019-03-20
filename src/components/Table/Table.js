import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';

export default class Table extends React.Component {
  render () {
    return (
        <ScrollView style={ { flex: 1 } }>
            <Header items={ this.props.headers } />
            <List items={ this.props.data } />
        </ScrollView>
    );
  }
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
