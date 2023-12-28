import { Image } from 'expo-image';
import {StyleSheet, View} from 'react-native';

export default function Poster ({ source }){
    return  (
      <View style={styles.container}>
          <Image
            style={styles.image}
            source={source}
            contentFit="cover"
            transition={100}
          />
      </View>
    )
}

    


const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    width: '100%',
  },

  image: {
    flex: 1,
    borderRadius: 16,
  },
});

