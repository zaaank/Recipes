import { createAction, props } from "@ngrx/store";
import { IngredientModel } from "./models/ingredient.model";
import { PostRecipeModel } from "./models/recipe.model";

export enum RecipesTypes {
  GetIngredients = '[Recipes] Get List Of Ingredients',
  SetIngredients = 'Recipes Set List Of Ingredients In Store',
  PostIngredient = '[Recipes] Post ingredient in database',
  PostRecipe = '[Recipes] Post new recipe in database',
  GetRecipesByGroup = '[Recipes] Get recipes by group',
  SetRecipesByGroup = '[Recipes] Set recipes by group'
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

export const PostRecipe = createAction(
  RecipesTypes.PostRecipe,
  props<{ recipe: PostRecipeModel }>()
);

export const GetRecipesByGroup = createAction(
  RecipesTypes.GetRecipesByGroup,
  props<{ groupName: 'Zajtrk' | 'Malica' | 'Kosilo' | 'Večerja' | 'Nekaj Sladkega' }>()
);

export const SetRecipesByGroup = createAction(
  RecipesTypes.SetRecipesByGroup,
  props<{ ingredients: IngredientModel[] }>()
);
