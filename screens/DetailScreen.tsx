import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  Poster,
  GeneralInfo,
  RatingInfo,
  Story,
  Actors,
  Teams,
} from "../components/DetailScreen";
import { ActivityIndicator } from 'react-native-paper';

import { getMovie } from '../utils/ajax'

const movie = {
};

export default function DetailScreen({ route, navigation }) {
  const [isReady, setIsReady] = useState(false);
  const [movie, setMovie] = useState({})

  useEffect(() => {
    // Set the header title before fetchin any data
    navigation.setOptions({
      title: route.params.title
    })
    // Async fetch for the movie data
    getMovie(route.params.id).then((data)=> {
      setMovie(data)
      setIsReady(true)
    })

  }, [route.params.id])

  if (isReady) {
    return (
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Poster poster={movie.poster} />
          <GeneralInfo info={movie.general} />
          <RatingInfo info={movie.rating} />
          <Story story={movie.story} />
          <Actors actors={movie.actors} />
        </View>
      </ScrollView>
    );

  } else {
    return (
      <ActivityIndicator style={styles.loading} animating />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

//const M = {
//  // Detailed Info
//  Director: "Tim Burton",
//  Writer: "Bob Kane, Sam Hamm, Warren Skaaren",
//  Language: "English, French, Spanish",
//  Country: "United States, United Kingdom",
//  Awards: "Won 1 Oscar. 10 wins & 28 nominations total",
//  imdbID: "tt0096895",
//};
