import {StyleSheet} from 'react-native';
import { Surface } from 'react-native-paper';

import MovieContent from './MovieContent'
import Poster from './MoviePoster'


export default function MovieCard ({ obj, navigation }) {
  return (

    <Surface elevation={0} style={styles.container}>

      <Poster source={obj.source} />

      <MovieContent obj={obj} navigation={navigation} />

    </Surface>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    padding: 3,
    borderRadius: 14,
  },


});
