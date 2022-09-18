import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as RecipesActions from "./recipes.actions";
import * as RecipesSelectors from "./recipes.selectors";

@Injectable()
export class RecipesFacadeService {
  // selector example
  // public experiments$ = this.store.pipe(
  //  select(ExperimentsSelectors.selectExperiments)
  // );

  // ctor example
  // constructor(private store: Store<ExperimentsState>) {}

  // store call example
  // loadExperiments() {
  //  this.store.dispatch(ExperimentsActions.loadExperiments());
  // }
}
