import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { RecipesApiService } from "./recipes-api.service";
import * as RecipesActions from "./recipes.actions";

@Injectable()
export class RecipesEffects {
  constructor(
    private actions: Actions,
    private recipesApiService: RecipesApiService
  ) {}

  getIngredients$ = createEffect(() =>
  this.actions.pipe(
    ofType(RecipesActions.getIngredients),
    switchMap(() =>
      this.recipesApiService.getIngredients().pipe(
        map((ingredients) => RecipesActions.SetIngredients({ingredients})),
      )
    )
  )
  );

  postIngredients$ = createEffect(() =>
  this.actions.pipe(
    ofType(RecipesActions.PostIngredient),
    switchMap((action) =>
      this.recipesApiService.postIngredient(action.ingredient)
    )
  ),{dispatch: false}
  );

  postRecipe$ = createEffect(() =>
  this.actions.pipe(
    ofType(RecipesActions.PostRecipe),
    switchMap((action) =>
      this.recipesApiService.postRecipe(action.recipe)
    )
  ),{dispatch: false}
  );

  getRecipesByGroup$ = createEffect(() =>
  this.actions.pipe(
    ofType(RecipesActions.GetRecipesByGroup),
    switchMap((action) =>
      this.recipesApiService.getRecipesByGroup(action.groupName)
    )
  ),{dispatch: false}
);
}
