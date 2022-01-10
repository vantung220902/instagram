import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignUpScreen';
import ChooseScreen from '../ChooseScreen';
import Social from '../Social';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='Choose' component={ChooseScreen}/>
        <Stack.Screen name='Social' component={Social}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

