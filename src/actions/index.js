export const actionTypes = {
  ADD_INGREDIENT: "ADD_INGREDIENT",
  REMOVE_INGREDIENT: "REMOVE_INGREDIENT",
};

export const actionAddIngredient = (ingredient) => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: ingredient,
});

export const actionRemoveIngredient = (ingredient) => ({
  type: actionTypes.REMOVE_INGREDIENT,
  payload: ingredient,
});
