import React, {useState} from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import {Button, Surface, Text, TextInput, useTheme } from 'react-native-paper';
import  search  from '../utils/ajax'

import Constants from 'expo-constants'

export default function SettingScreen({ route }) {
  const theme = useTheme()
  const [text, setText] = useState('')
  const [response, setResponse] = useState('')

  const fetchResponse = async () => {
    try {
      
      const res = await search(text)
      setResponse(JSON.stringify(res, null, 2))
    } catch (error) {
      const res = error
      setResponse(JSON.stringify(res, null, 2))
    }

  }

  return (
    <View style={styles.container}>
      <TextInput style={{ width: '90%',}} label="search" value={text} onChangeText={text => setText(text) } ></TextInput>
        <View style={{ flexDirection: 'row', gap: 20}}>
          <Button mode="elevated" onPress={fetchResponse} >fetch</Button>
          <Button mode="elevated" onPress={()=> setResponse('')}>clear</Button>

        </View>
        <Surface style={styles.textContainer}>
          <ScrollView>
                <Text>{response}</Text>
          </ScrollView>
        </Surface>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
  textContainer: {
      marign: 20,
      height: 500,
      width: 350,
      padding: 19,
  }
});