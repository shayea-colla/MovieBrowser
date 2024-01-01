import { StyleSheet, View } from "react-native";
import { Chip } from "react-native-paper";
import { v4 as uuidv4 } from 'uuid';

export function Genre({ style, genres }) {
  const genersList = genres.map((genre:string) => (
      <Chip key={uuidv4()} compact>{genre}</Chip>
  ))
  
  return (
    <View style={[styles.container, style]}>
      {genersList}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
});
