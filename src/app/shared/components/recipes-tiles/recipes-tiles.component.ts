import { Component, Input, OnInit } from '@angular/core';
import { RecipeCategory } from '../../Models/RecipeCategory.type';

@Component({
  selector: 'app-recipes-tiles',
  templateUrl: './recipes-tiles.component.html',
  styleUrls: ['./recipes-tiles.component.css']
})
export class RecipesTilesComponent implements OnInit {

  @Input()
  category!: RecipeCategory;

  constructor() { }

  ngOnInit() {
  }

}
