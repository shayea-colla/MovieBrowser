import React, {useState} from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import {Button, Surface, Text, TextInput, useTheme } from 'react-native-paper';
import { ThemePicker } from '../components/SettingScreen';

import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SettingScreen({ route, setDarkTheme }) {
  const theme = useTheme()
  return (
    <View style={[  styles.container, {backgroundColor: theme.colors.background}]}>
        <ThemePicker setDarkTheme={setDarkTheme} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
 //   backgroundColor: theme.colors.background,
  },
  textContainer: {
    marginBottom: 20,
  }
});
