import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from './utils/colors';

import Contacts from './screens/Contacts';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Profile from './screens/Profile';

const getTabBarIcon = (icon) => ({tintColor}) => (
  <Icon name={icon} size={26} style={{color: tintColor}} />
);

const ContactScreens = createStackNavigator(
  {
    Contacts,
    Profile,
  },
  {
    initialRouteName: 'Contacts',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('list'),
    },
  },
);

const FavoritesScreens = createStackNavigator(
  {
    Favorites,
    Profile,
  },
  {
    initialRouteName: 'Favorites',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('star'),
    },
  },
);

const UserScreens = createStackNavigator(
  {User},
  {
    initialRouteName: 'User',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person'),
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Contacts: ContactScreens,
    Favorites: FavoritesScreens,
    User: UserScreens,
  },
  {
    initialRouteName: 'Contacts',
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight,
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
    },
  },
);

export default createAppContainer(TabNavigator);
