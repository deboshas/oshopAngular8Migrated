import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string) {
    // return this.db.list('/orders', {
    //   queryFn: {
    //     orderByChild: 'userId',
    //     equalTo: userId
    //   }
    // });

    return this.db.list('/orders',
      ref => ref.orderByChild('userId').
        equalTo(userId)).valueChanges();

  }


}

