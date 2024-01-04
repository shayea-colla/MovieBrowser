import React, {useState} from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import {Button, Surface, Text, TextInput, useTheme } from 'react-native-paper';
import  search  from '../utils/ajax'

import Constants from 'expo-constants'

export default function SettingScreen({ route }) {
  const theme = useTheme()
  return (
    <View style={styles.container}>
        <Text variant='displayMedium' style={{ color: theme.colors.primary}}>coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
  textContainer: {
      marign: 20,
      height: 500,
      width: 350,
      padding: 19,
  }
});
