import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-example',
  templateUrl: './databinding-example.component.html',
  styleUrls: ['./databinding-example.component.css'],
})
export class DatabindingExampleComponent implements OnInit {
  pname: string = '';
  price: number = 0;
  quan: number = 0;
  result: number = 0;
  mystyle: string = '';

  get_total() {
    this.result = this.price * this.quan;
    if (this.result > 10000) {
      this.mystyle = 'color:green;';
    } else {
      this.mystyle = 'color:blue;';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
