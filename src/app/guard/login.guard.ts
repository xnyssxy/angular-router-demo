import{ CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {
  canActivate() {
    let num : number = Math.random();
    let loggedIn: boolean =  num < 0.5;
    console.log(num);
    if(!loggedIn) {
      console.log("用户未登录");
    }
    return loggedIn;
  }
}
