/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard';
import House from './Components/House/House';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'


// export class App extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//       </View>
//     );
//   }
// }
const navigator = createBottomTabNavigator({
  Home: Dashboard,
  Wizard: Wizard
})
const App = createAppContainer(navigator)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
