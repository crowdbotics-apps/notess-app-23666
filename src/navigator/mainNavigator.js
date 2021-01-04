import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial190112Navigator from '../features/Tutorial190112/navigator';
import NotificationList190084Navigator from '../features/NotificationList190084/navigator';
import Settings190083Navigator from '../features/Settings190083/navigator';
import Settings190075Navigator from '../features/Settings190075/navigator';
import UserProfile190073Navigator from '../features/UserProfile190073/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial190112: { screen: Tutorial190112Navigator },
NotificationList190084: { screen: NotificationList190084Navigator },
Settings190083: { screen: Settings190083Navigator },
Settings190075: { screen: Settings190075Navigator },
UserProfile190073: { screen: UserProfile190073Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
