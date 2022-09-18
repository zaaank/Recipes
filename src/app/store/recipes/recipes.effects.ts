import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { RecipesApiService } from "./recipes-api.service";
import * as RecipesActions from "./recipes.actions";

@Injectable()
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private recipesApiService: RecipesApiService
  ) {}

  // example
  // loadExperiments$ = createEffect(() =>
  //   this.actions.pipe(
  //     ofType(ExperimentsActions.loadExperiments),
  //     mergeMap(() =>
  //       this.experimentsApiService.getExperiments().pipe(
  //         map((experiments) =>
  //           ExperimentsActions.loadExperimentsSuccess({ experiments })
  //         ),
  //         catchError(() => of(ExperimentsActions.loadExperimentsFail()))
  //       )
  //     )
  //   )
  // );
}
