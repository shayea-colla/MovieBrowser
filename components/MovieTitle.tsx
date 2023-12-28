import {StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper';

export default function MovieTitle ({ title }) {
  return  (
      <Text numberOfLines={2} variant='titleLarge'>
        {title}
      </Text>
  )
}

