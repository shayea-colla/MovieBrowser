import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Searchbar } from 'react-native-paper';


export default function SearchBar ({ getMovies }) {

  const [query, setQuery] = useState('');

  const onChangeText = (text:string) => setQuery(text)

  return (
    <View style={styles.container}>
      <Searchbar 
        elevation={1}
        placeholder="Search" 
        onChangeText={onChangeText}
        value={query}
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
