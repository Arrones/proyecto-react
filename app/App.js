import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './src/home';
import DetailScreen from './src/detail';
import FavoritesScreen from './src/favorites';
import SettingsScreen from './src/setting';
import LogoTitle from './src/logo';

import Logo from './src/images/logoApple.png';

import SideDrawerCustom from './src/sideDrawer';

const HomeStack = createStackNavigator({Home: HomeScreen, Detail: DetailScreen, Favorites: FavoritesScreen});
const OtherStack = createStackNavigator({
  Settings: SettingsScreen,
  Detail: DetailScreen,
});

// const AppNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: ({navigation}) => ({
//         tabBarIcon: () => {
//           return <Image source={Logo} style={{height: 30, width: 30}}></Image>;
//         },
//       }),
//     },
//     User: UserScreen,
//   },
//   {
//     initialRouteName: 'User',
//     order: ['User', 'Home'],

//     // drawerWidth: 200,
//     // drawerPosition: 'right',
//     // contentComponent: SideDrawerCustom,
//   },
// );

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Favorites: FavoritesScreen,
  Settings: OtherStack,
});

export default createAppContainer(AppNavigator);
