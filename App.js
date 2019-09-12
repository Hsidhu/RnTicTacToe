import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen"
import TutorialScreen from "./src/screens/TutorialScreen"
import SettingsScreen from "./src/screens/SettingsScreen"
import PokeroddScreen from "./src/screens/PokeroddScreen"
import _ from 'lodash';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Tutorial: TutorialScreen,
  Settings: SettingsScreen
});
const PokerStack = createStackNavigator({
  Poker: PokeroddScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
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
