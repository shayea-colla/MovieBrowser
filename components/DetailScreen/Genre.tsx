import { StyleSheet, View } from "react-native";
import { Chip } from "react-native-paper";

export function Genre({ style, genres }) {
  const genersList = genres.map((genre) => (
      <Chip compact>{genre}</Chip>
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
