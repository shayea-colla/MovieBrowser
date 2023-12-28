import React, { useState, useEffect } from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import { Image } from 'expo-image';
import {
  Surface,
  Text,
} from 'react-native-paper';

import infoButtons from './InfoButtons'

function GeneralInfo () {
  return (
    <Surface style={styles.container}>
      <Text style={{ paddingLeft: 2}} variant="labelMedium">Movie</Text>
      <Text variant="headlineLarge">Batman</Text>
      <Genre style={{ marginTop: 10}} />
      <InfoButtons style={{ marginTop: 20}} />
    </Surface>
  )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 4,
    },
});
