import { PixelRatio, ScrollView, StyleSheet, View } from "react-native";

import React from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBox from "./components/SearchBox";
import { getRandomRecipe } from "./data/service";

export default function App() {
  const [recipes, changeRecipe] = React.useState([getRandomRecipe()]);

  return (
    <ScrollView style={styles.wrapper}>
      <SearchBox changeRecipe={changeRecipe} />
      <View style={styles.container}>
        {recipes.map((r, idx) => (
          <RecipeCard key={idx} recipe={r} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(10),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
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
