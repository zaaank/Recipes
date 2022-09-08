import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  formData: any;
  constructor() { }

  ngOnInit() {
    let test = document.documentElement.getAttribute('--base-accent');
    console.log(test)
  }

}
