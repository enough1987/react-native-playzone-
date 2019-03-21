import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '../../components/Table/Table';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import { searchUsers } from '../../store/actions/searchUsers';
import searchPageActionTypes from '../../store/actions/actionTypes';
import styles from './SearchUsersStyle';
import globalStyles from '../../global/globalStyle';

export class SearchUsers extends Component {
  updateSearch = (value) => {
    this.props.searchUsers(value);
  }

  render () {
    return (
        <View style={ globalStyles.pageContainer }>
            <Text style={ styles.title }> Home </Text>
            <SearchBox update={ this.updateSearch } />
            <Loader
              loading={ this.props.loading[searchPageActionTypes.SEARCH_USERS] }
              errors={ this.props.errors[searchPageActionTypes.SEARCH_USERS] }
            >
                <Table
                  data={ this.props.usersList }
                  headers={ this.props.headersList }
                />
            </Loader>
        </View>
    );
  }
}

SearchUsers.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  loading: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  searchUsers: PropTypes.func.isRequired,
  headersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  usersList: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  loading: state.common.loading,
  errors: state.common.errors,
  headersList: state.searchUsers.headersList,
  usersList: state.searchUsers.usersList
});

const mapDispatchToProps = dispatch => ({
  searchUsers: item => dispatch(searchUsers(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
