import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'Tasty Schnitzel', 
        'A super tasty Schnitzel',
        'https://fh-sites.imgix.net/sites/1590/2019/09/03181935/schnitzel.png?auto=compress%2Cformat&w=1000&h=1000&fit=max',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French findReadVarNames', 20)
        ]),
        new Recipe(
        'Big Fat Burger', 
        'What else you need to say?', 
        'https://www.foodyt.com/media/uploads/Big_Angus_Bacon_y_Trufa.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private shoppingListService:ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
    
}