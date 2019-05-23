import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen"
import DetailsScreen from "./src/screens/DetailsScreen"
import SettingsScreen from "./src/screens/SettingsScreen"

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

export const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    initialRouteName: 'Home',
  }
);


