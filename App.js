import { StyleSheet, Text, View } from "react-native";

import React from "react";
import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";

export default function App() {
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];
  return (
    <View style={styles.container}>
      <RecipeCard recipe={recipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
