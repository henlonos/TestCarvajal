
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {environment} from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'
import { service } from 'src/app/service';
@Component({
  selector: 'app-register-articles',
  templateUrl: './register-articles.component.html',
  styleUrls: ['./register-articles.component.css']
})

export class RegisterArticlesComponent  {

  mostrarAdmin:boolean = false;
  mostrarBuyer:boolean=false;
  role:any = "";
  dataProduct!:FormData ;
  file!:File;
  public form: FormGroup = this.generatePermissionsForm();
   
  constructor(private service:service,private fb:FormBuilder, private http:HttpClient, private router:Router) {
      this.role = localStorage.getItem("role");
     
      if(this.role === "Admin") this.mostrarAdmin=true;
      if(this.role ==="Buyer") this.mostrarBuyer = true;
       
   }

   generatePermissionsForm() {
    this.form = this.fb.group({
      codeproduct:['',Validators.required],
      nameproduct:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      items:['',Validators.required],
      image:['',Validators.required],

      
    });
    return this.form;
  }


onChange($event:any)
{
  this.file = $event.target.files[0];
     console.log(this.file);
}

salir()
{
  localStorage.removeItem("role");
  this.router.navigateByUrl("login");
}
  addProduct(form:any)
  {
   
    if(this.file !==  undefined && form.value.nameproduct !== "" && form.value.description !== "" && form.value.price !== "" && form.value.items !== "")
    {
     
      console.log("ingreso");
 
      const dataRegister:any = {
          file:this.file,
          nameproduct:form.value.nameproduct,
          description:form.value.description,
          price:form.value.price,
          items:form.value.items
    }
    this.service.cargarImagen(dataRegister).subscribe(data=>{
      
      this.generatePermissionsForm();
    });
    
  }

}

}
