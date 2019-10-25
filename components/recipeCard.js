import { PixelRatio, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function RecipeCard(data) {
  const recipe = data.recipe;
  const recipeTypeStyle = recipe.type
    .toLowerCase()
    .replace(/,/g, "")
    .split(" ")
    .join("");

  return (
    <View style={[styles.card, styles[recipeTypeStyle]]}>
      <Text style={styles.cardType}>{recipe.type}</Text>
      <Text style={styles.cardTitle}>{recipe.title}</Text>
      <Text style={styles.cardText}>{recipe.recipe}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightyellow",
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingTop: 0,
    borderTopWidth: PixelRatio.getPixelSizeForLayoutSize(6),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
    shadowColor: "black",
    shadowRadius: 5,
    alignSelf: "stretch"
  },
  cardType: {},
  cardTitle: {
    fontWeight: "bold",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8)
  },
  cardText: {},

  appetizersandsnacks: {
    borderTopColor: "#f47979"
  },
  beefdishes: {
    borderTopColor: "#bc9439"
  },
  beverages: {
    borderTopColor: "#98a4ff"
  },
  breadsandcereals: {
    borderTopColor: "#fff1b4"
  },
  cookiesandsweetsnacks: {
    borderTopColor: "#ba00c9"
  },
  desserts: {
    borderTopColor: "#d800ff"
  },
  cookiesandsweetsnacks: {
    borderTopColor: "#ba00c9"
  },
  eggsbreakfastandporkdishes: {
    borderTopColor: "#edf44d"
  },
  fish: {
    borderTopColor: "#5f4bff"
  },
  giftsandmiscellaneous: {
    borderTopColor: "#d80000"
  },
  grouprecipes: {
    borderTopColor: "#005700"
  },
  pastaandstarches: {
    borderTopColor: "#ffe367"
  },
  poultry: {
    borderTopColor: "#f1ff49"
  },
  salads: {
    borderTopColor: "#008100"
  },
  sandwiches: {
    borderTopColor: "#46eef5"
  },
  saucesjelliesanddressings: {
    borderTopColor: "#f599e3"
  },
  soups: {
    borderTopColor: "#bfe8a5"
  },
  specialoccasions: {
    borderTopColor: "#76007b"
  },
  vegetablesandfruits: {
    borderTopColor: "#33f870"
  }
});
