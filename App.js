import {
  Button,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import CategoriesBox from "./components/CategoriesBox";
import React from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBox from "./components/SearchBox";
import { getRandomRecipe } from "./data/service";

export default function App() {
  const [recipes, changeRecipe] = React.useState([getRandomRecipe()]);

  const [currentCategory, changeCategory] = React.useState("ALL");

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.topBar}>
        <SearchBox
          changeRecipe={value => {
            changeRecipe(value);
            changeCategory("ALL");
          }}
        />
        <Button
          title="Random Recipe"
          color="#ccc"
          onPress={() => {
            const recipe = getRandomRecipe();
            changeRecipe([recipe]);
            changeCategory("ALL");
          }}
        />
        <CategoriesBox
          currentCategory={currentCategory}
          changeCategory={changeCategory}
          changeRecipe={changeRecipe}
        />
      </View>

      {recipes.length != 1 && (
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {recipes.length} Recipes Found
        </Text>
      )}
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
  topBar: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  wrapper: {
    padding: PixelRatio.getPixelSizeForLayoutSize(10),
    paddingTop: 40
  }
});
