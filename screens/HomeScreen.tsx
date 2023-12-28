import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './SearchScreen'
import DetailScreen from './DetailScreen'

const Stack = createNativeStackNavigator()


export default function HomeScreen( { route, navigation }) {
  return (
    <Stack.Navigator initialRouteName="Detail">
      <Stack.Screen options={{ headerShown: false}} name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}



