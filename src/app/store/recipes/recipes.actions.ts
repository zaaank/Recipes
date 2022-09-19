import { createAction, props } from "@ngrx/store";
import { IngredientModel } from "./models/ingredient.model";

export enum RecipesTypes {
  GetIngredients = '[Recipes] Get List Of Ingredients',
  SetIngredients = 'Recipes Set List Of Ingredients In Store'
}

export const getIngredients = createAction(
  RecipesTypes.GetIngredients
);

export const SetIngredients = createAction(
  RecipesTypes.SetIngredients,
  props<{ ingredients: IngredientModel[] }>()
);
