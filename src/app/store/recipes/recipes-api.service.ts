import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettingsService } from "src/app/shared/services/app-services/app-settings.service";
import { IngredientModel } from "./models/ingredient.model";
import { GetRecipesByGroup, PostRecipeModel } from "./models/recipe.model";


@Injectable()
export class RecipesApiService {

  constructor(private http: HttpClient, private appSettings: AppSettingsService) { }

  getIngredients(): Observable<IngredientModel[]> {
    return this.http.get<IngredientModel[]>(this.appSettings.apiUrl + 'Ingredient');
  }

  postIngredient(ingredient: IngredientModel) {
    return this.http.post<IngredientModel>(this.appSettings.apiUrl + 'Ingredient', ingredient);
  }

  postRecipe(recipe: PostRecipeModel) {
    return this.http.post<any>(this.appSettings.apiUrl + 'Recipe', recipe);
  }

  getRecipesByGroup(groupName: 'Zajtrk' | 'Malica' | 'Kosilo' | 'Večerja' | 'Nekaj Sladkega') : Observable<GetRecipesByGroup> {
    const params = new HttpParams();
    params.append('group', groupName);
    return this.http.get<GetRecipesByGroup>(this.appSettings.apiUrl + 'Recipe', { params });
  }

}
