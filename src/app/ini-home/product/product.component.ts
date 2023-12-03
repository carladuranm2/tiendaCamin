import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  items = [
    { label: 'Item 1', image: 'assets/item1.jpg' },
    { label: 'Item 2', image: 'assets/item2.jpg' },
    { label: 'Item 3', image: 'assets/item3.jpg' },
    { label: 'Item 4', image: 'assets/item4.jpg' },
  ];
}
