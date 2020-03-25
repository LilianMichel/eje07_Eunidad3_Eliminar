import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.service';
import { IngredientService } from '../../services/ingredient.service';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.page.html',
  styleUrls: ['./new-ingredient.page.scss'],
})
export class NewIngredientPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private service: IngredientService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }
  saveIngredient() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newIngredient({
        name: this.myForm.get('name').value,
        imagen: this.myForm.get('imagen').value,
        active: false
      });
    }
  }

  initializeForm(): void{
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      imagen: ['', Validators.compose([Validators.required, Validators.minLength(20)])]
    });
  }

}
