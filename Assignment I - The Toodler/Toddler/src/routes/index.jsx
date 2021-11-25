import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Boards from '../views/Boards';
import Board from '../views/Board';


const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Boards" component={Boards} />
            <Stack.Screen name="Board" component={Board} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;