import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2560%2Cc_limit/bolognese-1.jpg'),
    new Recipe('Another Test Recipe', 'This is a simple test', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2560%2Cc_limit/bolognese-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
