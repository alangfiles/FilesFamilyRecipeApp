import recipes from "./recipes";

export const getRandomRecipe = () => {
  return recipes[Math.floor(Math.random() * recipes.length)];
};
