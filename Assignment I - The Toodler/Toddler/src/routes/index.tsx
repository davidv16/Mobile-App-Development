import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Boards from '../views/Boards/Boards';
import Board from '../views/Board/board';

const Stack = createStackNavigator({
    Boards,
    Board,
});

export default createAppContainer(Stack);
