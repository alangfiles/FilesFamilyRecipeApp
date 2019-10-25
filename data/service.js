import recipes from "./recipes";

export const getRandomRecipe = () => {
  return recipes[Math.floor(Math.random() * recipes.length)];
};

export const getRecipeList = word => {
  let typeMatches = recipes.filter(
    r => r.type.toLowerCase().indexOf(word.toLowerCase()) > -1
  );
  let titleMatches = recipes.filter(
    r => r.title.toLowerCase().indexOf(word.toLowerCase()) > -1
  );
  let recipeMatches = recipes.filter(
    r => r.recipe.toLowerCase().indexOf(word.toLowerCase()) > -1
  );
  let resultSet = [];
  resultSet = typeMatches.concat(titleMatches).concat(recipeMatches);

  resultSet = resultSet.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  return resultSet;
};
