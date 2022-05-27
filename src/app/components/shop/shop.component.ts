import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {service} from 'src/app/service'
import { NgbModal,NgbModalOptions,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  mostrarAdmin:boolean = false;
  mostrarBuyer:boolean=false;
  modalOpen:boolean=false;
  totalCompras:Number=0;
  role:any = "";
  products:any = [];
  productsInCart:any = [];
  modalOptions:NgbModalOptions = {};
  closeResult = '';
 @ViewChild("data") modalData!:ElementRef;
 @ViewChild("mymodal") modale!:ElementRef;

  constructor(private router:Router, private service :service,private modal:NgbModal) {
      this.role = localStorage.getItem("role");
      if(this.role === "Admin") this.mostrarAdmin=true;
      if(this.role ==="Buyer") {
        this.mostrarBuyer = true;
        this.getProducts();
      }
          
   }

  ngOnInit(): void {
  }

  AddToCart(price:any,nameproduct:any,nameimage:any,code:any)
  {

    let product: any =  {
      code:code,
     nameproduct:nameproduct,
     nameimage:nameimage,
     price:price,
     userId:localStorage.getItem("userId")
    }
    this.productsInCart.push(product);
    this.totalCompras = this.totalCompras + price;
    this.openModal(this.modalData);
  }

  save()
  {
    console.log(this.productsInCart);
    this.service.registerOrder(this.productsInCart).subscribe(data =>{
         this.modal.dismissAll();
         this.productsInCart =[];
         
    });
  }

  changeProduct(item:any)
  {

  }

  openModal(content:any)
  {
    this.modalOptions.backdrop='static',
    //  this.modalOptions.keyboard=false,
      this.modalOptions.size="xl";
      this.modal.open(content,this.modalOptions);
      this.modalOpen = true;
      var element = document.querySelector("body > ngb-modal-backdrop");
      element?.remove();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  cerrarModal()
  {
    this.modal.dismissAll();
  }

salir()
{
  localStorage.removeItem("role");
  this.router.navigateByUrl("login");
}
getProducts()
{
      this.service.getProducts().subscribe(data=>{
        this.products = data;
        console.log(this.products)
      })
}
  
}
