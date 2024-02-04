import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, StatusBar } from "react-native";
import {
  Poster,
  GeneralInfo,
  RatingInfo,
  Story,
  Actors,
} from "../components/DetailScreen";
import { ActivityIndicator, useTheme } from 'react-native-paper';

import { getMovie } from '../utils/ajax'

type infoButtons = {
  rated: string;
  released: string;
  runtime: string;
}

type generalInfo = {
  title: string;
  type: string;
  genre: string[];
  infoButtons: infoButtons;
}

type rating = {
  score: string;
  votes: string;
}

type movie = {
  poster: string;
  general: generalInfo;
  rating: rating;
  story: string;
  actors: string[];
}

export default function DetailScreen({ route, navigation }) {
  const [isReady, setIsReady] = useState(false);
  const [movie, setMovie] = useState<movie>()

  const theme  = useTheme()

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

  return (
        <ScrollView 
            style={{backgroundColor: theme.colors.background}} 
            overScrollMode="never" 
            showsVerticalScrollIndicator={false}
        >
        {
            isReady 
            ?  <View style={styles.container}>
                  <Poster poster={movie.poster} />
                  <GeneralInfo info={movie.general} />
                  <RatingInfo info={movie.rating} />
                  <Story story={movie.story} />
                  <Actors actors={movie.actors} />
                </View>

            : <ActivityIndicator style={styles.loading} animating />
        }

        </ScrollView>
  )

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

