import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';

const StackNavigator = createStackNavigator(
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
    hearderMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
