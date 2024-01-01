import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './SearchScreen'
import DetailScreen from './DetailScreen'

import { Text, useTheme } from 'react-native-paper'

const Stack = createNativeStackNavigator()


export default function HomeScreen( { route, navigation }) {
  const theme = useTheme()
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen options={{ headerShown: false}} name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{
        headerStyle: {
          backgroundColor: theme.colors.primaryContainer,
        },
        headerTitleAlign: 'center',
        headerTitleStyle:{
          fontWeight: '100',
        },
        title: ''
      }} />
    </Stack.Navigator>
  )
}



