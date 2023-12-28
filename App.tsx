import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  PaperProvider,
  BottomNavigation,
  MD3LightTheme,
  Text,
  Button,
} from 'react-native-paper';

import BottomTabNavigation from './components/BottomTabNavigation'


const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <PaperProvider theme={MD3LightTheme}>
        <NavigationContainer>
            <BottomTabNavigation />
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
    backgroundColor: '#282828'
  },
});

