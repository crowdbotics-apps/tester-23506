import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen61187519Navigator from '../features/BlankScreen61187519/navigator';
import CalendarView60187518Navigator from '../features/CalendarView60187518/navigator';
import CalendarView61187517Navigator from '../features/CalendarView61187517/navigator';
import UserProfile187516Navigator from '../features/UserProfile187516/navigator';
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
BlankScreen61187519: { screen: BlankScreen61187519Navigator },
CalendarView60187518: { screen: CalendarView60187518Navigator },
CalendarView61187517: { screen: CalendarView61187517Navigator },
UserProfile187516: { screen: UserProfile187516Navigator },
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
