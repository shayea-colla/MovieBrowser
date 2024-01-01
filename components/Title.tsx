import {StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper';
export default function Title ({ title, content }) { 
  return (
        <View style={styles.container}>
          <Text variant='bodyMedium' >
            {title}:
          </Text>
          <Text  variant="bodySmall">
            {content}
          </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    textStyle: { 
      marginRight: 3 , 
      fontWeight: 700 
    }

    
}); 
