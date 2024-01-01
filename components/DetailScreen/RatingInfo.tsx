import { StyleSheet, View } from "react-native";
import { useTheme, Surface, Text, Button } from "react-native-paper";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImdb } from '@fortawesome/free-brands-svg-icons'

export default function RatingInfo({ info }) {
  const theme = useTheme()

  return (
    <Surface style={[styles.container , {borderColor: theme.colors.primary,}]} >
        <ImdbRating score={info.score} />
        <VoteNumber number={info.votes} />
    </Surface>
  );
}


const VoteNumber = ({ number }) => {
  const voteNumber = number
  return (
    <View style={styles.imdbContainer}>
      <Text variant="bodyMedium">Votes: </Text>
      <Text variant="bodySmall">{voteNumber}</Text>
    </View>

  )

}

const ImdbRating = ({ score }) => {
  const theme = useTheme()

  return (
      <View style={styles.imdbContainer}>
        <FontAwesomeIcon icon={faImdb} color={theme.colors.secondary}  size={25} />
        <Text variant="bodyMedium">{score}/10</Text>
      </View>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    gap: 10,
  },

  imdbContainer: {
    gap: 3, 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
});
