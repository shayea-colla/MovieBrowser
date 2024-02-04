import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  Surface,
  Divider,
  useTheme,
  Button,
  Menu,
} from 'react-native-paper';

export default function ThemePicker ({ setDarkTheme }) {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
      <View style={styles.container}>
        <Menu 
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button mode='elevated' onPress={openMenu}>appearance</Button>}>
            <Menu.Item onPress={() => {
                setDarkTheme(true)
                AsyncStorage.setItem('darkTheme', 'true')
              }} title="Dark"/>
            <Divider bold />
            <Menu.Item onPress={() => {
                setDarkTheme(false)
                AsyncStorage.setItem('darkTheme', 'false')

              }} title="Light"/>
          </Menu>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  themeItem: {
    margin: 20,

  },
});
