import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css'],
})
export class ModelFormsComponent implements OnInit {
  validPattern = '^[a-zA-Z0-9]{10}$';

  ModelForms: FormGroup = new FormGroup({
    Oname: new FormControl('', Validators.required),
    ContactNo: new FormControl('', Validators.maxLength(10)),
    Oemail: new FormControl('', Validators.email),
    Vrg: new FormControl('', Validators.pattern(this.validPattern)),
    Address: new FormControl('', Validators.required),
    Model: new FormControl('', Validators.maxLength(10)),
    Color: new FormControl('', Validators.required),
    Year: new FormControl('', [Validators.min(2012), Validators.max(2022)]),
  });
  constructor() {}

  ngOnInit(): void {}

  public submit_click(): void {
    // ajax call to send data to server
    alert('Customer Details are registered.');
    let customerObj = this.ModelForms.value;
    console.log(customerObj);
  }
}
