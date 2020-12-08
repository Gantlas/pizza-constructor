import { actionTypes, TActions } from "../actions";

type TState = {
  currentIngredients: string[];
  countIngredients: number;
};

const initialState: TState = {
  currentIngredients: [],
  countIngredients: 0,
};

const reducer = (state: TState = initialState, action: TActions): TState => {
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

export type RootState = ReturnType<typeof reducer>;
