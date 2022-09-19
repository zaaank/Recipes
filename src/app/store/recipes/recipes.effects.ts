import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
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
}
