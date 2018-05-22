import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "../product/product.component";

export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  // 泛型，指定要保护的组件类型
  canDeactivate(component: ProductComponent) {
    return window.confirm("未保存，确定要离开吗？");
  }
}
