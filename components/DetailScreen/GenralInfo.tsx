import {StyleSheet, View} from 'react-native';


// react-native-paper
import { Text } from 'react-native-paper';

// my-own-components
import { InfoButtons }  from './InfoButtons'
import { Genre } from './Genre'

export default function GeneralInfo ({ info }) {
  return (
    <View style={styles.container}>
      <Text variant="displaySmall">{info.title}</Text>
      <Text style={{ paddingLeft: 2}} variant="labelMedium">{info.type}</Text>
      <Genre genres={info.genre} style={{ marginTop: 5}} />
      <InfoButtons info={info.infoButtons}  style={{ marginTop: 15}} />
    </View>
  )

}


const styles = StyleSheet.create({
    container: {
      padding: 4,
    },
});
