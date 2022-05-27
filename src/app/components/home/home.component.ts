import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrarAdmin:boolean = false;
  mostrarBuyer:boolean=false;
  role:any = "";
  dataProduct!:FormData ;
  file!:File;
 
  constructor(  private router:Router) {
      this.role = localStorage.getItem("role");
      console.log(this.role);
      if(this.role === "Admin") this.mostrarAdmin=true;
      if(this.role ==="Buyer") this.mostrarBuyer = true;
       
   }
  ngOnInit(): void {
  }

  salir()
{
  localStorage.removeItem("role");
  this.router.navigateByUrl("login");
}

}
