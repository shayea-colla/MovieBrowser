import { View } from "react-native";
import { Text, Divider } from "react-native-paper";

export const HeadLine = ({ style, title }) => (
  <View style={style}>
    <Text variant="headlineMedium">{title}</Text>
    <Divider bold style={{ width: "30%", marginTop: 4 }} />
  </View>
);
