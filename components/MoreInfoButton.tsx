import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-paper';




export default function  MoreInfoButton ({ navigation, movieId, movieTitle }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate("Detail", {id: movieId, title:movieTitle}) } mode="contained-tonal">More Info</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
});
