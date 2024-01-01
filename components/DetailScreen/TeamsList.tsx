import { StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { AvatarCard } from "./AvatarCard";

export const TeamsList = ({ actors }) => {
  const renderItem = ({ item }) => <AvatarCard item={item} />;

  return (
    <View style={styles.container}>
      <FlashList
        data={DATA}
        renderItem={renderItem}
        estimatedItemSize={200}
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const DATA = [
  {
    job: "Actor",
    name: "David_J",
  },
  {
    job: "Actor",
    name: "David_J",
  },
  {
    job: "Actor",
    name: "David_J",
  },
  {
    job: "Actor",
    name: "David_J",
  },
  {
    job: "Actor",
    name: "David_J",
  },
];