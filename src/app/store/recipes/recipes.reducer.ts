import { Action, createReducer, on } from "@ngrx/store";
import { RecipesState } from "../state-models/recipes.state";
import * as RecipesActions from "./recipes.actions";

const initialState: RecipesState = {
};

export const recipesReducerFn = createReducer(
  initialState,
  // EXAMPLE
  // on(ExperimentsActions.loadExperimentsSuccess, (state, action) => {
  //  return {
  //    ...state,
  //    experiments: action.experiments,
  //  };
  // })
);

export function recipesReducer(
  state = initialState,
  action: Action
) {
  return recipesReducerFn(state, action);
}
