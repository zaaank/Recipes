import { Component, OnInit } from '@angular/core';
import { IngredientModel } from 'src/app/store/recipes/models/ingredient.model';
import { RecipesFacadeService } from 'src/app/store/recipes/recipes-facade.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  formData: { name: string; store: string; mark: string; photo: string; } = {
    name: '', store:'', mark:'', photo: ''
  };
  constructor(private recipesFacadeService: RecipesFacadeService) { }

  ngOnInit() {
    let test = document.documentElement.getAttribute('--base-accent');
    this.saveIngredient = this.saveIngredient.bind(this);
    console.log(test)
  }

  saveIngredient() {
    const newIngredient: IngredientModel = {
      storeName: this.formData.store,
      mark: this.formData.mark,
      name: this.formData.name
    }
    this.recipesFacadeService.postIngredient(newIngredient);
  }

}
