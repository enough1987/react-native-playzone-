import React from 'react';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class SearchBox extends React.Component {
  constructor () {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
    this.props.update(search);
  };

  render () {
    const { search } = this.state;

    return (
        <SearchBar
          containerStyle={ { backgroundColor: 'white', borderWidth: 1, marginBottom: 10 } }
          inputContainerStyle={ { backgroundColor: 'white', borderWidth: 1 } }
          placeholder="Type Here..."
          onChangeText={ this.updateSearch }
          value={ search }
        />
    );
  }
}

SearchBox.propTypes = {
  update: PropTypes.func.isRequired
};
