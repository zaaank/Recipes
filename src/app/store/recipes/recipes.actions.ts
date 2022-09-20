import { createAction, props } from "@ngrx/store";
import { IngredientModel } from "./models/ingredient.model";

export enum RecipesTypes {
  GetIngredients = '[Recipes] Get List Of Ingredients',
  SetIngredients = 'Recipes Set List Of Ingredients In Store',
  PostIngredient = '[Recipes] Post ingredient in database'
}

export const getIngredients = createAction(
  RecipesTypes.GetIngredients
);

export const SetIngredients = createAction(
  RecipesTypes.SetIngredients,
  props<{ ingredients: IngredientModel[] }>()
);

export const PostIngredient = createAction(
  RecipesTypes.PostIngredient,
  props<{ ingredient: IngredientModel }>()
);
