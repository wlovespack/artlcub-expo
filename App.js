import React, { Component } from "react";

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screen/HomeScreen";
import AboutScreen from "./src/screen/AboutScreen";



const Base = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  }
}, {
  initialRouteName: 'Home',
  // order: ['Settings', 'Home'],
  activeTintColor: 'white',
  shifting: true
})


const App = createAppContainer(Base);

export default App;