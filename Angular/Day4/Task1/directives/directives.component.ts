import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  displayMode: string = 'List';

  productArr: any[] = [
    {
      pid: 1,
      pname: 'Samsung',
      price: 100,
      category: 'Electronics',
      qty: 4,
      picture: 'image/Details.png',
    },
    {
      pid: 2,
      pname: 'LG',
      price: 200,
      category: 'Electronics',
      qty: 2,
      picture: 'image/LargeImage.png',
    },
    {
      pid: 3,
      pname: 'Toshiba',
      price: 300,
      category: 'Electronics',
      qty: 4,
      picture: 'image/SmallImage.png',
    },
    {
      pid: 4,
      pname: 'Havells',
      price: 400,
      category: 'Electronics',
      qty: 6,
      picture: 'image/List.png',
    },
    {
      pid: 5,
      pname: 'Panasonic',
      price: 500,
      category: 'Electronics',
      qty: 8,
      picture: 'image/update.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  Image_Click(param: string) {
    // alert(param);
    this.displayMode = param;
  }
}
