import {StyleSheet, View} from 'react-native';
import MovieTitle from './MovieTitle'
import MovieInfo from './MovieInfo'
import MoreInfoButton from './MoreInfoButton'



export default function MovieContent ({ obj, navigation }) {
  return (
      <View  style={styles.container}>
        <MovieTitle title={obj.movieTitle} />
        <MovieInfo info={obj} />
        <MoreInfoButton navigation={navigation} movieTitle={obj.movieTitle} movieId={obj.id} />
      </View>
  )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 4,
      height: 200,
      marginLeft: 10,
    },
});
