import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;

  private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.routeInfo);
    // 路由传参
    // this.productId = this.routeInfo.snapshot.queryParams["id"];
    // url路径传参
    // this.productId = this.routeInfo.snapshot.params["id"];
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);
    this.routeInfo.data.subscribe( ( data : {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    })
  }
}

export class Product {
  constructor(
    public id: number,
    public name: string){

  }
}
