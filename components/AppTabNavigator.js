import * as React from 'react';
import HomeScreen from '../screens/HomeScreen'
import ExchangeScreen from '../screens/ExchangeScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'HomeScreen'
    }
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarLabel: 'ExchangeScreen'
    }
  }
})