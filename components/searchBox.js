import { Button, StyleSheet, TextInput, View } from "react-native";
import { getRandomRecipe, getRecipeList } from "../data/service";

import React from "react";

export default function SearchBox({ changeRecipe }) {
  const [textValue, onChangeText] = React.useState("Search Recipes");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => {
          onChangeText(text);
          if (text.length > 3) {
            const recipes = getRecipeList(text);
            if (recipes && recipes.length > 0) {
              changeRecipe(recipes[0]);
            }
          }
        }}
        value={textValue}
      />
      <Button
        title="Random Recipe"
        color="#ccc"
        onPress={() => {
          const recipe = getRandomRecipe();
          changeRecipe(recipe);
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
