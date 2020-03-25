import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.service';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) {
    this.ingredients = this.ingredientService.getIngredients();
  }

}
