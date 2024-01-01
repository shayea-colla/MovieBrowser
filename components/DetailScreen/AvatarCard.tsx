import {StyleSheet, View} from "react-native";
import { Avatar , Text} from 'react-native-paper';

export const AvatarCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={84} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/3/38/David_J._Malan.png"}} />
      <AvatarText text={item} style={{ marginTop: 8, color: 'gray'}} />
    </View>
  )
}


const AvatarText = ({ style, text }) => (
      <Text numberOfLines={2} style={style} variant="bodySmall">
        {text}
      </Text>
)

const styles = StyleSheet.create({
    container: {
      marginRight: 20,
      alignItems: 'center'
    },
});

