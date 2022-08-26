import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-deyvi';

  constructor(private authService:AuthenticationService,
    private router:Router){
    
  }
  isAuthenticated():boolean{
    return this.authService.isLoggedIn();
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
