import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import Constants from 'expo-constants'

export default function SettingScreen({ route }) {
  const theme = useTheme()
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={{ color:theme.colors.primary }}>Coming Soon!</Text>
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
});
