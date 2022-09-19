import { Action, createReducer, on } from "@ngrx/store";
import { RecipesState } from "../state-models/recipes.state";
import * as RecipesActions from "./recipes.actions";

const initialState: RecipesState = {
  availableIngredients: [],
};

export const recipesReducerFn = createReducer(
  initialState,
  // EXAMPLE
   on(RecipesActions.SetIngredients, (state, action) => {
    return {
      ...state,
      availableIngredients: action.ingredients,
    };
   })
);

export function recipesReducer(
  state = initialState,
  action: Action
) {
  return recipesReducerFn(state, action);
}
