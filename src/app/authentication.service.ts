import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  fakeUsername:string ="username";
  fakePassword:string="password";



  constructor() { }

  login(username:string,password:string):Observable<any>{
    if(username===this.fakeUsername && password===this.fakePassword){
      localStorage.setItem("token","mi-token");
      return of("ok")
    }else{
      return throwError(()=>new Error('error'))
    }
  }

  logout():void{
    localStorage.removeItem("token");
  }

  isLoggedIn():boolean{//si hay sesion
    return localStorage.getItem("token") !=null;
  }

  

}
