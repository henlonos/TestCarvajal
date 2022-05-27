import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcommerceHaloPets';
  mostrarAdmin:boolean = false;
  mostrarBuyer:boolean=false;
  role:any = "";
  constructor() {
    this.role = localStorage.getItem("role");
    if(this.role === "Admin") this.mostrarAdmin=true;
    if(this.role ==="Buyer") this.mostrarBuyer = true;
     
 }
}
