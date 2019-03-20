import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { sortUsers } from '../../store/actions/searchUsers';
import styles from './TableStyle';

export class Header extends React.Component {
  updateSort = (label) => {
    const order = this.props.sortedBy.order === 'asc'
      ? 'desc'
      : 'asc';

    this.props.sortUsers(label, order);
  }

  renderColumn = (column, key, width) => {
    let iconName = 'ios-arrow-up';
    let iconColor = '#fff';

    if (this.props.sortedBy.label === column.label) {
      iconColor = '#fff';
      iconName = this.props.sortedBy.order === 'asc'
        ? 'ios-arrow-down'
        : 'ios-arrow-up';
    }

    return (
        <View
          key={ key }
          style={ [styles.headerItem, { width, padding: 2 }] }
        >
            <Text style={ styles.headrTitle }>
                { column.label }
            </Text>

            <Icon
              name={ iconName }
              color={ iconColor }
              size={ 15 }
              onPress={ () => this.updateSort(
                column.label
              ) }
            />

        </View>
    );
  }

  render () {
    return (
        <View
          style={ styles.header }
        >
            {
              this.props.items.map((column, index) => (
                this.renderColumn(column, index, this.props.columnsWidth[index])
              ))
            }
        </View>
    );
  }
}

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnsWidth: PropTypes.arrayOf(PropTypes.number).isRequired,
  sortUsers: PropTypes.func.isRequired,
  sortedBy: PropTypes.shape({
    label: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  sortedBy: state.searchUsers.sortedBy
});

const mapDispatchToProps = dispatch => ({
  sortUsers: (label, order) => dispatch(sortUsers(label, order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
