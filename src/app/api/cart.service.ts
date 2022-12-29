import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public productlist = new BehaviorSubject<any>([])
public cartitemlist:any=[]
  constructor() { }

  //get
  getproduct(){
    return this.productlist.asObservable();
  }
  // add to cart
  addtocart(product:any){
  this.cartitemlist.push(product);
  this.productlist.next(this.cartitemlist)
this.gettotalprice();
  }
   // total  price
   gettotalprice():number{
    let total = 0;
    this.cartitemlist.map((a:any)=>{
      total +=a.total;
      // console.log(grandtotal);
      
    })
    return total;
   }

   //empty or delete cart
   removeallcart(){
     this.cartitemlist=[]
     this.productlist.next(this.cartitemlist);
   }
   // delete cart item
   removecartitem(product:any ){
    this.cartitemlist.map((a:any,index:any)=>{
   if(product.id ===a.id)
   this.cartitemlist.splice(index,1)
    })
    this.productlist.next(this.cartitemlist);

   }
  }
