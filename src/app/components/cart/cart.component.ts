import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products!:any[];
public total:number =0;
  constructor(private cart:CartService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
  this.products = res;
  this.total = this.cart.gettotalprice();
    })
  }
emptycart(){
  this.toast.info({detail:'Your Cart Is Empty',summary:'all item have been deleted',duration:3000})
  this.cart.removeallcart();
}

delete(item:any){
  this.toast.warning({detail:' Deleted from Cart',summary:'item has been deleted',duration:1000})
 this.cart.removecartitem(item)
}
}
