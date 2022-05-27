import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { service } from 'src/app/service';

@Component({
  selector: 'app-querys',
  templateUrl: './querys.component.html',
  styleUrls: ['./querys.component.css']
})
export class QuerysComponent implements OnInit {

  productsMax:any = [];
  productsMin:any = [];

  mostrarAdmin:boolean = false;
  mostrarBuyer:boolean=false;
  role:any = "";
  dataProduct!:FormData ;
  file!:File;
   
  constructor( private router:Router
  ,private service:service) {
      this.role = localStorage.getItem("role");
     
      if(this.role === "Admin") {
        this.mostrarAdmin=true;
   
        this.getMaxProduct();
        this.getMinProduct();
        // this.service.getMinProduct().subscribe(data=>{
        //   this.productsMin = data;

        // })
      }
      if(this.role ==="Buyer") this.mostrarBuyer = true;

  }
  ngOnInit(): void {
  }

  getMaxProduct()
  {
    this.service.getMaxProduct().subscribe(data=>{
      this.productsMax = data;
      console.log(this.productsMax)
   })
  }
  getMinProduct()
  {
    this.service.getMinProduct().subscribe(data=>{
      this.productsMin = data;
      console.log(this.productsMax)
   })
  }
  

salir()
{
  localStorage.removeItem("role");
  this.router.navigateByUrl("login");
}

}
