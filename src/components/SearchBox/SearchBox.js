import React from 'react';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';

let timeout = null;

export default class SearchBox extends React.Component {
  constructor (props) {
    super(props);
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
    }, 1000);
  };

  onCancel = () => {
    clearTimeout(timeout);
  }

  render () {
    const { search } = this.state;

    return (
        <SearchBar
          platform="ios"
          lightTheme
          containerStyle={ { backgroundColor: '#fff' } }
          inputContainerStyle={ { backgroundColor: '#efefef' } }
          placeholder="Type Here..."
          onChangeText={ this.updateSearch }
          onCancel={ this.onCancel }
          value={ search }
        />
    );
  }
}

SearchBox.propTypes = {
  update: PropTypes.func.isRequired
};
