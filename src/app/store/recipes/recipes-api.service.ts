import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class RecipesApiService {
    constructor(private http: HttpClient) {}

    // example
    // getExperiments() {
    //  return this.http.get<Experiment[]>(
    //    this.settingsService.apiUrl + "/test/ExperimentsTest"
    //  );
    // }
}
