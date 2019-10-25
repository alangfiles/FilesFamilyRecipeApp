import { PixelRatio, ScrollView, StyleSheet, View } from "react-native";

import React from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBox from "./components/SearchBox";
import { getRandomRecipe } from "./data/service";

export default function App() {
  const [textValue, onChangeText] = React.useState("Search Recipes");

  const [recipe, changeRecipe] = React.useState(getRandomRecipe());

  return (
    <ScrollView style={styles.wrapper}>
      <SearchBox
        textValue={textValue}
        searchText={onChangeText}
        randomRecipe={changeRecipe}
      />
      <View style={styles.container}>
        <RecipeCard recipe={recipe} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(10),
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    paddingTop: 40
  }
});
