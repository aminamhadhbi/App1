import { Component, OnInit } from '@angular/core';
import {Product} from "../Model/Product";

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {


 search=-1;
  decrementQuantity(p:Product){

    let index =this.listProdcut.indexOf(p)
    this.listProdcut[index].quantity--


  }
  incrementlike(indice:number){
  //  let index =this.listProdcut.indexOf(p)
    this.listProdcut[indice].like++

  }
  listProdcut: Product[]=[
     {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
     {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
     {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]



  constructor() { }

  ngOnInit() {
  }


}
