import { Component, Input, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  
 
  info:any;
  result: any={};
  @Input() ciudad:string="Merida";
  @Input() hobby="Tomar cafe";
  @Input() image="../assets/pexels-rodolfo-quirós-1727123.jpg";

  constructor(private welcomeService:WelcomeService) { 
    
  }

  ngOnInit(): void {


    this.info=this.welcomeService.getData().subscribe(data=>{
      if(data.my_data){
        //console.log(data.my_data);
        this.result=data.my_data[0];
      }
      
    });
    // this.info.subscribe({
    //   next(num: any) { 
    //     console.log(num.my_data[0]); 
    //     this.result=num.my_data[0];
    //   },
    //   complete() { console.log(''); }
    // });
    
  }

}
