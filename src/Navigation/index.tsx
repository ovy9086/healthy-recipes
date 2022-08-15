import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import DetailsScreen from '../Screens/Details';
import { Recipe } from '../Services/RecipesService';

export type RootStackParamsList = {
  Home: undefined;
  Details: { recipe: Recipe };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

function NavigationRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRouter;
