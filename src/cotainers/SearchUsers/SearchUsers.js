import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '../../components/Table/Table';
import SearchBox from '../../components/SearchBox/SearchBox';
import { searchUsers } from '../../store/actions/searchUsers';
import searchPageActionTypes from '../../store/actions/actionTypes';
import styles from './SearchUsersStyle';

export class SearchUsers extends Component {
  updateSearch = (value) => {
    this.props.searchUsers(value);
  }

  render () {
    return (
        <View style={ styles.container }>
            <SearchBox update={ this.updateSearch } />
            {
              this.props.loading[searchPageActionTypes.SEARCH_USERS]
                ? <ActivityIndicator size="large" color="#0000ff" />
                : (
                    <Table
                      data={ this.props.usersList }
                      headers={ this.props.headersList }
                    />
                )
            }
        </View>
    );
  }
}

SearchUsers.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  searchUsers: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  loading: PropTypes.object.isRequired,
  headersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  usersList: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  loading: state.common.loading,
  headersList: state.searchUsers.headersList,
  usersList: state.searchUsers.usersList
});

const mapDispatchToProps = dispatch => ({
  searchUsers: item => dispatch(searchUsers(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
