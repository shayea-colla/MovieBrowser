import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';


import SearchScreen from './SearchScreen'
import DetailScreen from './DetailScreen'

import { useTheme } from 'react-native-paper'

const Stack = createNativeStackNavigator()


export default function HomeScreen( { route, navigation }) {
  const theme = useTheme()
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Group>
        <Stack.Screen options={{ headerShown: false}} name="Search" component={SearchScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Detail" component={DetailScreen} options={{
        //  headerTitle: (props) => (
        //    <Text 
        //    numberOfLines={2}
        //      ellipsizeMode='tail'
        //      style={{ fontSize: 18, textAlign: 'center', width: '80%', overflow:'hidden'}}
        //      >{props.children}</Text>
        //  ),

          presentation: 'modal',

          headerStyle: {
            backgroundColor: theme.colors.primaryContainer,
          },
          title: '',
        }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

