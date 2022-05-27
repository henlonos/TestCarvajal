import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { environment } from "src/environments/environment";


const endpoint = environment.endpoint;

@Injectable({
    providedIn:"root"
})

export class service{

    httpOptions={
        headers: new HttpHeaders({
            "Content-Type":"application/json",
            'Access-Control-Allow-Origin': '*',
            'mode':'no-cors'
        })
    
    }
constructor(private http:HttpClient){

}

getProducts()
{
    return this.http.get(endpoint+"register/getAll");
}


getMaxProduct()
{
    return this.http.get(endpoint+"register/maxProduct");
}

getMinProduct(){
    return this.http.get(endpoint+"register/minProduct");
}
registerOrder(order:order)
{

    return this.http.post(endpoint+"register/saveOrder",order);

}
 cargarImagen(registerProduct:registerProduct)
 {
        const formdata: FormData = new FormData();
        formdata.append("image",registerProduct.file);
        formdata.append("nameproduct",registerProduct.nameproduct);
        formdata.append("description",registerProduct.description);
        formdata.append("price",registerProduct.price);
        formdata.append("items",registerProduct.items);

        return this.http.post(endpoint+"register/registerProduct",formdata);
     // return  this.http.post('https://api.imgbb.com/1/upload?expiration=600&'+'key=ee9f7837c4212b381bb81bf18eed06ee'+File ,this.httpOptions);


 }
    /**
 *  Interface registerProduct
 */

}
interface registerProduct{
    file:File,
    nameproduct:string,
    description:string,
    price:string,
    items:string
}

interface order{
    code:number,
    nameproduct:string,
    nameimage:string,
    price:string,
    userId:number
}
