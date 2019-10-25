import recipes from "./recipes";

export const getRandomRecipe = () => {
  return recipes[Math.floor(Math.random() * recipes.length)];
};

export const getCategories = () => {
  return Array.from(new Set(recipes.map(r => r.type)));
};

export const getRecipesFromCategory = category => {
  return recipes.filter(r => r.type === category);
};

function searchTerm(word) {
  let typeMatches = recipes.filter(
    r => r.type.toLowerCase().indexOf(word) > -1
  );
  let titleMatches = recipes.filter(
    r => r.title.toLowerCase().indexOf(word) > -1
  );
  let recipeMatches = recipes.filter(
    r => r.recipe.toLowerCase().indexOf(word) > -1
  );
  let resultSet = [];
  resultSet = typeMatches.concat(titleMatches).concat(recipeMatches);
  resultSet = resultSet.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  return resultSet;
}

export const getRecipeList = search => {
  query = search.toLowerCase();
  let words = query.split(" ");
  let subsetOfRecipes = [];
  let resultSets = [];
  for (var i = 0; i < words.length; i++) {
    let word = words[i];

    let result = searchTerm(word);
    resultSets.push(result);
  }
  subsetOfRecipes = intersection(resultSets);

  return subsetOfRecipes;
};

function intersection() {
  var result = [];
  var lists;
  if (arguments.length === 1) {
    lists = arguments[0];
  } else {
    lists = arguments;
  }
  for (var i = 0; i < lists.length; i++) {
    var currentList = lists[i];
    for (var y = 0; y < currentList.length; y++) {
      var currentValue = currentList[y];
      if (result.indexOf(currentValue) === -1) {
        var existsInAll = true;
        for (var x = 0; x < lists.length; x++) {
          if (lists[x].indexOf(currentValue) === -1) {
            existsInAll = false;
            break;
          }
        }
        if (existsInAll) {
          result.push(currentValue);
        }
      }
    }
  }
  return result;
}
