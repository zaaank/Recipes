import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RecipesState } from "../state-models/recipes.state";

const selectRecipesState =
  createFeatureSelector<RecipesState>("recipes");

// EXAMPLE
 export const selectIngredients = createSelector(
  selectRecipesState,
  (state) => state.availableIngredients);
