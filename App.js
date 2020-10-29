import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import HomeScreen from './screens/HomeScreen';
import Covid19 from './screens/Covid19';
import SportsScreen from './screens/SportsScreen';
import WeatherScreen from './screens/WeatherScreen';
import Highlights from './screens/Highlights';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Covid19: Covid19,
  SportsScreen: SportsScreen,
  WeatherScreen: WeatherScreen,
  Highlights: Highlights,
});

const AppContainer = createAppContainer(AppNavigator);