import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.service';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ingredients: Ingredient[];
  search: string;

  constructor(private studentService: IngredientService, private router: Router, private alert: AlertController) {
    this.clearSearch();
  }

  operation(pos: number, ev: {detail: { side}}) {
    const side = ev.detail.side;
    if (side === 'start') {
      this.studentService.changeStatus(pos);
    } else {
      this.showAlert(pos);
    }
  }
  async showAlert(pos: number) {
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar?',
      buttons: [{
        text: 'No',
        handler: () => {}
      }, {
        text: 'Si',
        handler: () => {
          this.studentService.deleteIngredient(pos);
        }
      }]
    });
    await al.present();
  }

  newIngredient(): void {
    this.router.navigate(['/new-ingredient']);
  }

  clearSearch(): void {
    this.ingredients = this.studentService.getIngredients();
  }
  filter(): void {
    this.clearSearch();

    if (this.search && this.search.trim()) {
      this.ingredients = this.ingredients.filter( (student) => {
        return ((student.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1)  ||
         (student.imagen.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1));
      });
}
    }























 

}
