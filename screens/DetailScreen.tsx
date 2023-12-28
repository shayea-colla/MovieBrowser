import React, { useState, useEffect } from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import { Image } from 'expo-image';
import {
  Surface,
  Text,
  Divider,
  MD3LightTheme,
  Button,
  Chip,
} from 'react-native-paper';


import { GeneralInfo, Poster } from '../components/DetailScreen'



import {searchById} from '../utils/ajax'

const movie = {

  // General Info
  "Title": "Batman",
  "Year": "1989",
  "Type": "movie",
  "imdbRating": "7.5",
  "imdbVotes": "398,066",
  "Genre": "Action, Adventure",


  // Ranking Info
  "Metascore": "69",

  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.5/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "76%"
    },
    {
      "Source": "Metacritic",
      "Value": "69/100"
    }
  ],


  // Detailed Info
  "Rated": "PG-13",
  "Released": "23 Jun 1989",
  "Runtime": "126 min",
  "Director": "Tim Burton",
  "Writer": "Bob Kane, Sam Hamm, Warren Skaaren",
  "Language": "English, French, Spanish",
  "Country": "United States, United Kingdom",
  "Awards": "Won 1 Oscar. 10 wins & 28 nominations total",
  "imdbID": "tt0096895",

  // Actors 
  "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger",

  // Description
  "Plot": "Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton). Grissom's right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman's everyday persona, billionaire Bruce Wayne.",

  // Image
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",

}





export default function DetailScreen ({ route, navigation }) {

  return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Poster />

          <Divider bold={false}/>

          <GeneralInfo />

        </View>
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 16,
      marginRight: 16,

    },

    header: {
      flex: 1,
      gap: 5,

    },

    imageContainer: {
      flex: 1,
    },

    image: {
      flex: 1,

    }

});

