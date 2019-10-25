import { StyleSheet, TextInput, View } from "react-native";

import React from "react";
import { getRecipeList } from "../data/service";

export default function SearchBox({ changeRecipe }) {
  const [textValue, onChangeText] = React.useState("");

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Search Recipes"
      onChangeText={text => {
        onChangeText(text);
        if (text.length > 2) {
          const recipes = getRecipeList(text);
          changeRecipe(recipes);
        }
      }}
      value={textValue}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    minWidth: 150,
    margin: 5,
    alignSelf: "stretch"
  }
});
