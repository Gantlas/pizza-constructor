export enum actionTypes {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
}

type TActionAddIngredient = {
  type: actionTypes;
  payload: string;
};

type TActionRemoveIngredient = {
  type: actionTypes;
  payload: string;
};

export type TActions = TActionAddIngredient | TActionRemoveIngredient;

export const actionAddIngredient = (ingredient: string): TActions => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: ingredient,
});

export const actionRemoveIngredient = (ingredient: string): TActions => ({
  type: actionTypes.REMOVE_INGREDIENT,
  payload: ingredient,
});
