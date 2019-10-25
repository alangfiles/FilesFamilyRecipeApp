import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";
import { getRandomRecipe } from "../data/service";

export default function SearchBox({ searchText, textValue, randomRecipe }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => {
          if (text.length > 3) {
            searchText(text);
          }
        }}
        value={textValue}
      />
      <Button
        title="Random Recipe"
        color="#ccc"
        onPress={() => {
          const recipe = getRandomRecipe();
          randomRecipe(recipe);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  textInput: {
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    minWidth: 200,
    alignSelf: "stretch"
  }
});
