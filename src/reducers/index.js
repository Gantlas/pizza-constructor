import { actionTypes } from "../actions";

const initialState = {
  currentIngredients: [],
  countIngredients: 0,
};

const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      return {
        ...state,
        currentIngredients: [...state.currentIngredients, action.payload],
        countIngredients: state.countIngredients + 1,
      };
    }

    case actionTypes.REMOVE_INGREDIENT: {
      return {
        ...state,
        currentIngredients: state.currentIngredients.filter(
          (ing) => ing !== action.payload
        ),
        countIngredients: state.countIngredients - 1,
      };
    }

    default:
      return state;
  }
};

export default reducer;
