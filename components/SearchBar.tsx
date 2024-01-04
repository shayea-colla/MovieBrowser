import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Searchbar } from 'react-native-paper';


export default function SearchBar ({ getMovies, setData }) {

  const [query, setQuery] = useState('');

  const onChangeText = (text:string) => setQuery(text)

  return (
    <View style={styles.container}>
      <Searchbar 
        elevation={0}
        placeholder="Search" 
        onChangeText={onChangeText}
        value={query}
          // Clear the data when clear button pressed
          onClearIconPress={() => setData([])}
        onIconPress={() => getMovies(query.trim())}
        onSubmitEditing={() => getMovies(query.trim())}

       />
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginLeft: 16,
      marginRight: 16,
    },
});
