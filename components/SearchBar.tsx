import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Searchbar } from 'react-native-paper';


export default function SearchBar ({ setIsSearching, getMovies, setData }) {

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
          onClearIconPress={() => {
              // empty the movie list
              setData([])
              // set is searching to false to remove loading indicator
              setIsSearching(false)

          }}
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
