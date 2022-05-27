import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class LoginComponent  {
  public form: FormGroup = this.generatePermissionsForm();
  endpoint = environment.endpoint;
  responseLogin:any = [];
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router) { }


  generatePermissionsForm() {
    this.form = this.fb.group({
      usuario:['',Validators.required],
      clave:['',Validators.required]
    });
    return this.form;
  }

  validating($event:any)
  {
    
    let credentials={
      username:$event.value.usuario,
      password:$event.value.clave
    }

    if(this.form.valid)
    {
      console.log(credentials);
       this.http.post(this.endpoint+'login/authenticate',credentials).subscribe(data =>{
           this.responseLogin = data;
           console.log(this.responseLogin);
           localStorage.setItem('usuario',credentials.username);
           localStorage.setItem("role",this.responseLogin[0].Role);
           localStorage.setItem("userId",this.responseLogin[0].userId);

           this.router.navigateByUrl("home");
      });
    }
  }

}
