import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is a simple test', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2560%2Cc_limit/bolognese-1.jpg'),
  //   new Recipe('Another Test Recipe', 'This is a simple test', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2560%2Cc_limit/bolognese-1.jpg')
  // ];

  constructor(private recipeService:RecipeService, 
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  // OnRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
