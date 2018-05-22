import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Product } from "../product/product.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

// 需要装饰器
@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor( private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {
    let id:number = route.params["id"];

    if(id ==1){
      return new Product(1,"iPhone7");
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
