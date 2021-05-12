import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer'
import SettingsScreen from '../screens/SettingsScreen'
import { TabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: TabNavigator },
    SettingsScreen: { screen: SettingsScreen },

},
    { contentComponent: CustomSideBarMenu },
    { initialRouteName: 'Home' }
)