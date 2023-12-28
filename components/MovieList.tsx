import React, { useState } from 'react';
import {
  StyleSheet, 
  SafeAreaView,
  FlatList
} from 'react-native';

import MovieCard from './MovieCard'

export default function MovieList( { route, navigation, data }) {

  // DATA is a LIST of Objects

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        renderItem={(obj) => <MovieCard obj={obj.item} navigation={navigation} route={route} />}  
        />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

