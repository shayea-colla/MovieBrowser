import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

export default function Poster({ poster }) {
  return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={poster}
          contentFit="contain"
          transition={100}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,

  },

  image: {
    flex: 1,
    width: '100%'
  },
});
