import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  // ingredientAdded = new EventEmitter<{name: string, amount:string}>();
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private serviceShoppingService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName =  this.nameInputRef.nativeElement.value;
    const ingAmount =  this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIngredient);
    this.serviceShoppingService.addIngredient(newIngredient);
  }

}
