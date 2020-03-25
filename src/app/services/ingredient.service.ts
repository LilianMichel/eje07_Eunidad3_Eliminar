import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.service';
import { NumericValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredients: Ingredient[] = new Array();

  constructor() {
    this.ingredients.push({
      name: '500 gr. de Espaguetis',
      active: true,
      imagen: "https://www.bolinchelidrinkstore.com/1334-thickbox_default/espagueti-bolsa-5-kg.jpg"
    });
    this.ingredients.push({
      name: '175 gr. de carne picada de ternera',
      active: true,
      imagen: "https://www.carnevillamaria.com/media/catalog/product/cache/1/image/ec808153d738e8262bb5886ec7dca00a/c/a/carnepicadadeterneraficha.jpg"
    });
    this.ingredients.push({
      name: '175 gr. de carne picada de cerdo',
      active: true,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQePyu4ZfjHcmscD5Wz5-Qxjdxp6LkzXOdZMDTH5TcX_wEG3mLj"
    });
    this.ingredients.push({
      name: '1 Cebolla',
      active: true,
      imagen: "https://laopinionla.files.wordpress.com/2015/11/colesterol-cebolla-copy.jpg?quality=80&strip=all&w=768"
    });
    this.ingredients.push({
      name: '1 Diente de ajo',
      active: true,
      imagen: "https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/ajos.jpg?itok=UX7sF3ol"
    });
    this.ingredients.push({
      name: '2 Zanahorias',
      active: true,
      imagen: "https://www.gadis.es/supermercados/wp-content/uploads/2018/07/shutterstock_440493100.jpg"
    });
    this.ingredients.push({
      name: '700 gr de tomates',
      active: true,
      imagen: "https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/03/28/Recortada/img_ysaiz_20160908-162606_imagenes_lv_getty_istock_22114092_small-k6dG-U421271476554tOF-992x558@LaVanguardia-Web.jpg"
    });
    this.ingredients.push({
      name: 'Queso parmesano rallado',
      active: true,
      imagen: "https://previews.123rf.com/images/tobi/tobi1605/tobi160500871/57349259-de-queso-parmesano-rallado-y-la-cu%C3%B1a-en-el-fondo-blanco.jpg"
    });
    this.ingredients.push({
      name: 'Aceite de oliva',
      active: true,
      imagen: "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/06/29/Recortada/img_ysaiz_20180105-161054_imagenes_lv_getty_istock-576732962-kjVB-U45480442211RdB-992x558@LaVanguardia-Web.jpg"
    });
    this.ingredients.push({
      name: 'Oregano',
      active: true,
      imagen: "https://www.dabruno.com/contenido/pagina628-1.jpg"
    });
    this.ingredients.push({
      name: 'Sal',
      active: true,
      imagen: "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/09/17/Recortada/img_hmacia_20190917-135447_imagenes_lv_getty_istock-848612696-kGK-U47428365886X7H-992x558@LaVanguardia-Web.jpg"
    });
    this.ingredients.push({
      name: 'Pimienta',
      active: true,
      imagen: "https://mejorconsalud.com/wp-content/uploads/2013/05/pimienta-1-500x334.jpg"
    });

  }

  changeStatus(position: number) {
    this.ingredients[position].active = !this.ingredients[position].active;
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  newIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  deleteIngredient(position: number): void {
    this.ingredients.splice(position, 1); //Quitar un eleemento o muchos en este caso solo 1
  }
}
