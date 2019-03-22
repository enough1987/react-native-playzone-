import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import styles from './TableStyle';

const getWidths = () => {
  const { width } = Dimensions.get('window');
  return [
    width * 0.25,
    width * 0.20,
    width * 0.20,
    width * 0.34
  ];
};

export default class Table extends React.Component {
  state = {
    widths: getWidths()
  }

  componentWillMount () {
    Dimensions.addEventListener('change', this.handlerChangeWidth);
  }

  componentWillUnmount () {
  // Important to stop updating state after unmount
    Dimensions.removeEventListener('change', this.handlerChangeWidth);
  }

  handlerChangeWidth = () => {
    this.setState({
      widths: getWidths()
    });
  };

  render () {
    return (
        <View style={ { flex: 1 } }>
            <Header
              columnsWidth={ this.state.widths }
              items={ this.props.headers }
            />
            {
              this.props.data.length
                ? (
                    <List
                      columnsWidth={ this.state.widths }
                      items={ this.props.data }
                    />
                )
                : <Text style={ styles.searchText }> Please search </Text>
            }
        </View>
    );
  }
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
