import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url  = environment.apiUrl;
  apiUrl =environment.apiUrl + 'api/';
  name = 'Recipes';
  version = '1.0.0';
  date = '01.09.2022';

constructor() { }

}
