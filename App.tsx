import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import {
  PaperProvider,
  BottomNavigation,
  MD3LightTheme,
  useTheme,
  MD2DarkTheme,
  MD3DarkTheme,
} from 'react-native-paper';

import BottomTabNavigation from './components/BottomTabNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();


export default function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const theme = darkTheme ? MD3DarkTheme: MD3LightTheme;

  const getTheme = async () => {
    try {
      const item = await AsyncStorage.getItem('darkTheme')
      if (item === 'true') {
        setDarkTheme(true)
      }
    } catch (error) {
      alert("couldn't set the theme")
    }

  }

  getTheme()

  return (
    <PaperProvider theme={theme}>
        <NavigationContainer>
            <BottomTabNavigation setDarkTheme={setDarkTheme} />
            <StatusBar backgroundColor={theme.colors.primary} />
        </NavigationContainer>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

