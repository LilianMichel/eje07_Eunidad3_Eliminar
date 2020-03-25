import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.service';
import { IngredientService } from '../services/ingredient.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) {
    this.ingredients = this.ingredientService.getIngredients();
  }
}
