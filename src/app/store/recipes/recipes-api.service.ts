import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettingsService } from "src/app/shared/services/app-services/app-settings.service";
import { IngredientModel } from "./models/ingredient.model";


@Injectable()
export class RecipesApiService {

  constructor(private http: HttpClient, private appSettings: AppSettingsService) { }

  getIngredients(): Observable<IngredientModel[]> {
    return this.http.get<IngredientModel[]>(this.appSettings.apiUrl + 'Ingredient');
  }



}
