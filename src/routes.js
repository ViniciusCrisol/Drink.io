import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Drinks from './pages/Drinks';
import Description from './pages/Description';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Drinks,
    Description,
  })
);

export default Routes;
