
import {StyleSheet, View} from 'react-native';
import Title from './Title'

export default function MovieInfo ({ info }) {
  return (
    <View style={styles.container}>
          <View style={{ justifyContent: 'space-between'}} >
            <Title title="year" content={info.year} />
            <Title title="id" content={info.id} />
          </View>

          <View>
            <Title title="type" content={info.type} />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 19,
      marginTop: 10,

    },
});
