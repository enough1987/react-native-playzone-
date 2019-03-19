import React from 'react';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';

let timeout = null;

export default class SearchBox extends React.Component {
  constructor () {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
    if (!search) {
      return;
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      this.props.update(search);
    }, 1500);
  };

  onCencel = () => {
    clearTimeout(timeout);
  }

  render () {
    const { search } = this.state;

    return (
        <SearchBar
          containerStyle={ { backgroundColor: 'white', borderWidth: 1, marginBottom: 10 } }
          inputContainerStyle={ { backgroundColor: 'white', borderWidth: 1 } }
          placeholder="Type Here..."
          onChangeText={ this.updateSearch }
          onCencel={ this.onCencel }
          value={ search }
        />
    );
  }
}

SearchBox.propTypes = {
  update: PropTypes.func.isRequired
};
