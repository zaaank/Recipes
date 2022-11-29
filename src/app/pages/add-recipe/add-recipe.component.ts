import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { DxFormComponent } from 'devextreme-angular';
import { IngredientModel } from 'src/app/store/recipes/models/ingredient.model';
import { PostRecipeModel } from 'src/app/store/recipes/models/recipe.model';
import { RecipesFacadeService } from 'src/app/store/recipes/recipes-facade.service';
import { AddRecipeSimpleForm } from './add-recipe.model';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  @ViewChild('simpleForm') simpleForm!: DxFormComponent;

  formData: AddRecipeSimpleForm = {
    'choose-group': 'Zajtrk',
    name: '',
    "upload-photo": '',
    description: ''
  }
  groups: ('Zajtrk'| 'Malica'| 'Kosilo'| 'Večerja'| 'Nekaj Sladkega')[] = ['Zajtrk', 'Malica', 'Kosilo', 'Večerja', 'Nekaj Sladkega'];
  listOfIngredients: IngredientModel[] = [];

  form!: FormGroup<{
    ingredients:FormArray<FormControl>,
  }>;
  constructor(private recipesFacade: RecipesFacadeService) { }

  get ingredients(): any[] {
    return (this.form.get('ingredients') as FormArray<FormControl>).controls;
  }

  displayExpr = (item: IngredientModel) => {
    if (item)
      return  item.name + ' ' +item.mark + ' (' +  item.storeName +')' ;
    else
      return '';
 }

  ngOnInit() {
    this.initForm();
    this.recipesFacade.selectAvailableIngredients$.subscribe(ingredients =>
      this.listOfIngredients = ingredients
    )
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
    console.log(ingredients);
  }

  deleteIngredient(index: number) {
    let ingredients = this.form.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }

  addNewRecipe() {
    if (this.form.valid && this.simpleForm.instance.validate().isValid) {
      let ingredients = this.form.get('ingredients') as FormArray;
      let newRecipe: PostRecipeModel = {
        name: this.formData.name,
        directions: this.formData.description,
        group: this.formData['choose-group'],
        ingredientIds: ingredients.value
      }
      this.recipesFacade.postRecipe(newRecipe);
    }
  }
}


