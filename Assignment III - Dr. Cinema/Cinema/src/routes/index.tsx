import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';
import UpcomingMovies from '../views/UpcomingMovies';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} options={{title: "Heim", headerTintColor: "white", headerStyle: {backgroundColor: "gray"}}} />
      <Stack.Screen name="Cinemas" component={Cinemas} options={{title: "Kvikmyndahús"}}/>
      <Stack.Screen name="CinemaDetail" component={CinemaDetail} options={{title:"Kvikmyndahús"}}/>
      <Stack.Screen name="Movie" component={MovieDetail} options={{title:"Bíómynd"}}/>
      <Stack.Screen name="UpcomingMovies" component={UpcomingMovies} options={{title:"Vætanlegar myndir"}} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
