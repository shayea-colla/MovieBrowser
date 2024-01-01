import React from "react";
import {StyleSheet, View} from "react-native";
import { Avatar , Text} from 'react-native-paper';
import { FlashList } from "@shopify/flash-list";
import { Image } from 'expo-image';
import { AvatarCard } from './AvatarCard'

export const ActorsList = ({ actors }) => {
  const renderItem = ({ item }) => <AvatarCard item={item} />

  return (
    <View style={styles.container}>

      <FlashList
        data={actors}
        renderItem={renderItem}
        estimatedItemSize={200}
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
};


const styles = StyleSheet.create({
    container: {
    },
});
