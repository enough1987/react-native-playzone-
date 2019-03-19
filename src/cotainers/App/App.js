/**
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import SearchUsers from '../SearchUsers/SearchUsers';
import Trends from '../Trends/Trends';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import store from '../../store/store';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: SearchUsers
    },
    Trends: {
      screen: Trends
    },
    About: {
      screen: About
    },
    Contacts: {
      screen: Contacts
    }
  },
  {
    initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(Navigator);

export default class App extends React.Component {
  render () {
    return (
        <Provider store={ store }>
            <AppContainer />
        </Provider>
    );
  }
}
