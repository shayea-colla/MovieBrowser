import React, { useState } from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Constants from 'expo-constants'
import { ActivityIndicator } from 'react-native-paper';
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import Alert from '../components/Alert'
import search from '../utils/ajax'


export default function SearchScreen( { route, navigation }) {
  const [data, setData] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertTitle, setAlertTitle] = useState('')


  const getMovies = async (query:string) => {
    setIsSearching(true)

    try {
      const data = await search(query)
      setData(data)

    } catch (e) {
      handleError(e)

    }

    setIsSearching(false)

  }


  const handleError = (error) => {
    if (error?.code === "ERR_NETWORK") {
      setAlertTitle(error.message)
      setAlertMessage("check your internet connection")

    } else {
      setAlertMessage(error.message) 
      setAlertTitle(error.name) 

    }
    setAlertVisible(true)
  }

  return (
    <View style={styles.container}>
      <SearchBar getMovies={getMovies} />

      <View style={styles.content}>
        {
          isSearching 
          ? <ActivityIndicator style={{ flex: 1 }} size="small"  animating={isSearching}/>
          : <MovieList data={data} navigation={navigation} route={route} />
//          : data 
//          ? <PlaceHolder type="search" />
        }
      </View>

      <Alert title={alertTitle} visible={alertVisible} message={alertMessage} setVisible={setAlertVisible} />
        <StatusBar />

    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
  }
});


