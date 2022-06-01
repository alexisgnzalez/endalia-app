import { Injectable } from '@angular/core';
import { UserService } from '@app/services/user.service';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(
      private _router:Router,
      private userService: UserService) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        if (!this.userService.logged)  {
          alert('You are not allowed to view this page');
          this._router.navigate(['login']);
          return false;
        } 
        return true;
    }
 
}