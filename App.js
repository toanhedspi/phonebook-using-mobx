/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PhoneBookScreen from './src/components/PhoneBookScreen';

type Props = {};

class PhoneScreen extends Component {
  render() {
    return (
      <Text>Testing outside</Text>
    )
  }
}

export default class App extends Component<Props> {
  render() {
    return (
        <PhoneBookScreen style={{flex: 1}}/>
      
    );
  }
}

