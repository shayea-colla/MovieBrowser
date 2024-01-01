import {StyleSheet, View} from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { HeadLine } from './HeadLine'

export default function Story ({ story }) {
  return (
    <View style={styles.container}>
      <HeadLine style={{ marginBottom: 5 }} title="Story" />
      <Text variant="bodySmall">{story}</Text>
    </View>

  )
}





const styles = StyleSheet.create({
    container: {
    },

}); 

