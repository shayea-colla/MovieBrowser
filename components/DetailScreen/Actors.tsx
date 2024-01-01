import {StyleSheet, View} from 'react-native';

import { HeadLine } from './HeadLine'
import { ActorsList } from './ActorsList'


export default function Actors ({ actors }) {
  return (
    <View style={styles.container}>
      <HeadLine style={{ marginBottom: 10}} title="Actors" />
      <ActorsList actors={actors} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
});
