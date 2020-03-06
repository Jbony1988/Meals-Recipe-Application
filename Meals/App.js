/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {enableScreens} from 'react-native-screens';
import MealsNavigator from './navigations/MealNavigator';

enableScreens();

const App = () => {
  return <MealsNavigator />;
};

const styles = StyleSheet.create({});

export default App;
