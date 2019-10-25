import { Button, Picker, StyleSheet, View } from "react-native";
import { getCategories, getRecipesFromCategory } from "../data/service";

import React from "react";

export default function CategoriesBox({
  changeRecipe,
  currentCategory,
  changeCategory
}) {
  const [showCategories, toggleShowCategories] = React.useState(true);

  const categories = getCategories();

  return (
    <View style={styles.container}>
      {/* <Button
        title={showCategories ? "Hide Categories" : "Show Categories"}
        color="#ccc"
        onPress={() => {
          toggleShowCategories(!showCategories);
        }}
      /> */}
      <View styles={styles.categoryContainer}>
        {showCategories && (
          <Picker
            selectedValue={currentCategory}
            style={{ height: 50, alignSelf: "stretch" }}
            onValueChange={itemValue => {
              if (itemValue != "") {
                changeRecipe(getRecipesFromCategory(itemValue));
                changeCategory(itemValue);
              }
            }}
          >
            <Picker.Item label={"All Recipes"} value={"ALL"} />
            {categories.map((c, idx) => (
              <Picker.Item key={idx} label={c} value={c} />
            ))}
          </Picker>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5
  },
  container: {
    flex: 1,
    alignSelf: "stretch"
  },
  categoryContainer: {
    backgroundColor: "red",
    alignSelf: "stretch"
  }
});
