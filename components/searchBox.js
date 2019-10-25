import { StyleSheet, TextInput, View } from "react-native";
import { getRecipeList, getRecipeListAsync } from "../data/service";

import React from "react";

export default function SearchBox({ changeRecipe, toggleLoading }) {
  const [textValue, onChangeText] = React.useState("");

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Search Recipes"
      onChangeText={async text => {
        toggleLoading(true);
        onChangeText(text);
        if (text.length > 2) {
          const recipes = await getRecipeListAsync(text);
          changeRecipe(recipes);
        }
        toggleLoading(false);
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
