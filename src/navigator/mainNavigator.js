import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps187497Navigator from '../features/Maps187497/navigator';
import Settings187475Navigator from '../features/Settings187475/navigator';
import Settings187460Navigator from '../features/Settings187460/navigator';
import NotificationList187459Navigator from '../features/NotificationList187459/navigator';
import Maps187458Navigator from '../features/Maps187458/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps187497: { screen: Maps187497Navigator },
Settings187475: { screen: Settings187475Navigator },
Settings187460: { screen: Settings187460Navigator },
NotificationList187459: { screen: NotificationList187459Navigator },
Maps187458: { screen: Maps187458Navigator },

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
