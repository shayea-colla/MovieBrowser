import { StyleSheet, View } from "react-native";
import { Surface } from "react-native-paper";

import { HeadLine } from "./HeadLine";
import { TeamsList } from "./TeamsList";

export default function Actors({ teams }) {
  return (
    <View style={styles.container}>
      <HeadLine style={{ marginBottom: 10 }} title="Team" />
      <TeamsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
