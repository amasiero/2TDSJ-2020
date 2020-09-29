import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from './utils/colors';

import Contacts from './screens/Contacts';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Profile from './screens/Profile';
import Options from './screens/Options';

// const getTabBarIcon = (icon) => ({tintColor}) => (
//   <Icon name={icon} size={26} style={{color: tintColor}} />
// );

const getDrawerItemIcon = (icon) => ({tintColor}) => (
  <Icon name={icon} size={22} style={{color: tintColor}} />
);

const ContactScreens = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Contacts',
    navigationOptions: {
      // tabBarIcon: getTabBarIcon('list'),
      drawerIcon: getDrawerItemIcon('list'),
    },
  },
);

const FavoritesScreens = createStackNavigator(
  {
    Favorites: {
      screen: Favorites,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Favorites',
    navigationOptions: {
      // tabBarIcon: getTabBarIcon('star'),
      drawerIcon: getDrawerItemIcon('star'),
    },
  },
);

const UserScreens = createStackNavigator(
  {User, Options},
  {
    mode: 'modal',
    initialRouteName: 'User',
    navigationOptions: {
      // tabBarIcon: getTabBarIcon('person'),
      drawerIcon: getDrawerItemIcon('person'),
    },
  },
);

// const TabNavigator = createBottomTabNavigator(
//   {
//     Contacts: ContactScreens,
//     Favorites: FavoritesScreens,
//     User: UserScreens,
//   },
//   {
//     initialRouteName: 'Contacts',
//     tabBarOptions: {
//       style: {
//         backgroundColor: colors.greyLight,
//       },
//       showLabel: false,
//       showIcon: true,
//       activeTintColor: colors.blue,
//       inactiveTintColor: colors.greyDark,
//     },
//   },
// );

const DrawerNavigator = createDrawerNavigator(
  {
    Contacts: ContactScreens,
    Favorites: FavoritesScreens,
    User: UserScreens,
  },
  {
    initialRouteName: 'Contacts',
    renderIndicator: () => null,
  },
);

// export default createAppContainer(TabNavigator);
export default createAppContainer(DrawerNavigator);
