import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import SearchBox from '../../components/SearchBox/SearchBox';
import { searchUsers } from '../../store/actions/searchUsers';
import searchPageActionTypes from '../../store/actions/actionTypes';

export class SearchUsers extends Component {
  updateSearch = (value) => {
    this.props.searchUsers(value);
  }

  render () {
    console.log('HOME PAGE', this.props.usersList);
    return (
        <View style={ { flex: 1 } }>
            <Header navigation={ this.props.navigation } />
            <SearchBox update={ this.updateSearch } />
            {
              this.props.loading[searchPageActionTypes.SEARCH_USERS]
                ? <ActivityIndicator size="large" color="#0000ff" />
                : <Table data={ this.props.usersList } />
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
  usersList: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    loading: state.common.loading,
    usersList: state.searchUsers.usersList
  });
};

const mapDispatchToProps = dispatch => ({
  searchUsers: item => dispatch(searchUsers(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
