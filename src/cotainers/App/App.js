/**
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Provider } from 'react-redux';

import SearchUsers from '../SearchUsers/SearchUsers';
import Trends from '../Trends/Trends';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import store from '../../store/store';

const TabNavigator = createBottomTabNavigator(
  {
    Home: SearchUsers,
    Trends: Trends,
    About: About,
    Contacts: Contacts,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
          iconName = 'home';
            break;
          case 'Trends':
            iconName = 'chart-line';
            break;
          case 'About':
            iconName = 'sun';
            break;
          case 'Contacts':
            iconName = 'headset';
            break;
          default:
            break;
        }
        return <FontAwesome5 name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#76cdd8',
      inactiveTintColor: '#888',
    },
  }
);
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render () {
    return (
        <Provider store={ store }>
            <AppContainer />
        </Provider>
    );
  }
}
