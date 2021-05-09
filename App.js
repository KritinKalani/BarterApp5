import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import ExchangeScreen from './screens/ExchangeScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {TabNavigator} from './components/AppTabNavigator'

export default class App extends React.Component{
  render(){
  return (
      <AppContainer/>
  )}
}



const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTabNavigator: {screen: TabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)