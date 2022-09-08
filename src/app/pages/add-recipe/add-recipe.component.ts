import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  form!: FormGroup;
  formData: any = {
    'choose-group': 'Zajtrk',
  }
  groups: any = ['Zajtrk', 'Malica', 'Kosilo', 'Večerja', 'Nekaj Sladkega'];
  listOfIngredients: string[] = [''];
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      ingredients: new FormArray([])
    });
    //this.form.get('ingredients')?.setValue(['']);
  }
  addIngredient(index: number) {
    let ingredients = this.form.get('ingredients') as FormArray;
    ingredients.push('');
   /*  let insertedItemIdx = this.listOfIngredients.length - 1;
    let itemToInsert = this.listOfIngredients[insertedItemIdx];
    this.listOfIngredients.forEach((ingredient, idx) => {
      if (idx >= index) {
          let tmp = this.listOfIngredients[index];
          this.listOfIngredients[index] = itemToInsert;
          itemToInsert = tmp;
        }
    }) */
  }

}
