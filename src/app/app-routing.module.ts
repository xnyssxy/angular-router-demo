import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';

import { LoginGuard } from "./guard/login.guard";
import { UnsavedGuard } from "./guard/unsaved.guard";
import { ProductResolve } from "./guard/product.resolve";

const routes: Routes = [
  // 注意不能 用 /开头
  // {path: '', component: HomeComponent},// ''这样其实不好，不友好，还想跳到默认路由的话，可以用重定向
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent,
  children: [
    {path: '', component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}
  ],
  // 通过在目标路由，添加 canActivate 属性指定路由守卫, 满足守卫条件方可进入路由
  // canActivate: [LoginGuard],
  // 通过在目标路由，添加 canDeactivate 属性指定路由守卫, 满足守卫条件方可离开路由
  // canDeactivate: [UnsavedGuard]
  // resolve路由守卫属性，值为一个对象
  resolve: {
  product: ProductResolve
  }
  },
  // 辅助路由，通过指定outlet插座位置，指令该组件显示位置
  {path: 'chat', component: ChatComponent, outlet:'aux'},
  {path: '**', component: Code404Component} // 通配符路由，一定要放在最后
  //因为路由是从上到下依次匹配的，通配路由要放在最后，其他都没有匹配的才走这个
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // LoginGuard,
    // UnsavedGuard,
  ProductResolve] //路由守卫，这里也要添加
})
export class AppRoutingModule { }
