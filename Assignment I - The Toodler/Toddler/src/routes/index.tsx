import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Boards from '../views/Boards'

const Stack = createStackNavigator({
    Boards,
});

export default createAppContainer(Stack);
