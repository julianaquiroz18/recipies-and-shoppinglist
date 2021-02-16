import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    // ingredientsChange = new EventEmitter<Ingredient[]>();
    ingredientsChange = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // ingredients.map(ingredient =>{
        //     this.ingredients.push(ingredient)
        // })
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
    }

}