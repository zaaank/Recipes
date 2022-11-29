import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RecipesState } from "../state-models/recipes.state";
import { IngredientModel } from "./models/ingredient.model";
import { PostRecipeModel } from "./models/recipe.model";
import * as RecipesActions from "./recipes.actions";
import * as RecipesSelectors from "./recipes.selectors";

@Injectable()
export class RecipesFacadeService {
   public selectAvailableIngredients$ = this.store.pipe(
    select(RecipesSelectors.selectIngredients)
   );

  // ctor example
   constructor(private store: Store<RecipesState>) {}

  // store call example
   getIngredients() {
    this.store.dispatch(RecipesActions.getIngredients());
  }

  postIngredient(ingredient: IngredientModel) {
    this.store.dispatch(RecipesActions.PostIngredient({ingredient}));
  }

  postRecipe(recipe: PostRecipeModel) {
    this.store.dispatch(RecipesActions.PostRecipe({recipe}));
   }
}
