import { IngredientModel } from "../recipes/models/ingredient.model";

export interface RecipesState {
  availableIngredients: IngredientModel[];
}
