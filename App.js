import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen"
import DetailsScreen from "./src/screens/DetailsScreen"
import SettingsScreen from "./src/screens/SettingsScreen"
import PokeroddScreen from "./src/screens/PokeroddScreen"

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});
const PokerStack = createStackNavigator({
  Poker: PokeroddScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    Poker: PokerStack
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(TabNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
