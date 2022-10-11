import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  formData: any = {
    'choose-group': 'Zajtrk',
  }
  groups: any = ['Zajtrk', 'Malica', 'Kosilo', 'Večerja', 'Nekaj Sladkega'];
  listOfIngredients: string[] = [''];

  form!: FormGroup<{
    ingredients:FormArray<FormControl>,
  }>;
  constructor() { }

  get ingredients(): any[] {
    return (this.form.get('ingredients') as FormArray<FormControl>).controls;
  }

  ngOnInit() {
    this.initForm();
    console.log(this.form.get("ingredients"))
  }

  initForm() {
    this.form = new FormGroup({
      ingredients: new FormArray<FormControl>([
        new FormControl(null, Validators.required)
      ])
    })
  }

  addIngredient(index: number) {
    let ingredients = this.form.get('ingredients') as FormArray;
    ingredients.insert(index + 1, new FormControl(null, Validators.required));
  }

  deleteIngredient(index: number) {
    let ingredients = this.form.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }
}


