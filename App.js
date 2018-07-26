/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import PhoneBookScreen from './src/components/PhoneBookScreen';
import DetailScreen from './src/components/DetailScreen';
import phoneBookStore from './src/mobx/PhoneBookStore'

name = 3;
type Props = {};

const App = createStackNavigator({
  Home: { screen: PhoneBookScreen } ,
  Details: { screen: DetailScreen },
});

class MyApp extends Component {
  render() {
    return (
      <App screenProps={phoneBookStore.listApi} />
    )
  }
}

export default MyApp;

