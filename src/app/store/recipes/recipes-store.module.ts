import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RecipesApiService } from "./recipes-api.service";
import { RecipesFacadeService } from "./recipes-facade.service";
import { RecipesEffects } from "./recipes.effects";
import { recipesReducer } from "./recipes.reducer";
// import { RecipesResolver } from "./recipes.resolver";


@NgModule({
  imports: [
    StoreModule.forFeature("recipes", recipesReducer),
    EffectsModule.forFeature([RecipesEffects]),
  ],
  providers: [
    RecipesApiService,
    RecipesFacadeService,
    // RecipesResolver,
  ],
})
export class RecipesStoreModule {}