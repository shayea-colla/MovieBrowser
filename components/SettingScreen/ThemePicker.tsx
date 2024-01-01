import { View, StyleSheet } from 'react-native';
import { 
  Text,
  Surface,
  Divider,
  useTheme,
} from 'react-native-paper';

export default function ThemePicker () {

  const theme = useTheme()

  return (
    <Surface style={styles.container}>
      <View style={styles.themeItem}>
        <Text>color</Text>
      </View>
      <Divider bold style={{ borderWidth: 1, borderColor: theme.colors.tertiary}} />
      <View style={styles.themeItem}>
        <Text>color</Text>
      </View>
      <Divider bold style={{ borderWidth: 1, borderColor: theme.colors.tertiary}} />
      <View style={styles.themeItem}>
        <Text>color</Text>
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 20,
  },
  themeItem: {
    margin: 20,

  },
});
