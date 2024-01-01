import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export function InfoButtons({ style, info }) {
  return (
    <View style={[styles.container, style]}>
      <BillButton icon="" title={info.rated} />
      <BillButton icon="calendar" title={info.released} />
      <BillButton icon="clock" title={info.runtime} />
    </View>
  );
}

const BillButton = ({ icon, title }) => {
  return (
    <Button
      icon={icon}
      compact
      style={{ paddingHorizontal: 5 }}
      mode="elevated"
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
});
