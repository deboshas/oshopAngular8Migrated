import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    // return this.db.list('/categories', {
    //   query: {
    //     orderByChild: 'name'
    //   }
    // });

    return this.db.list('/categories',
      ref => ref.orderByChild('name')).valueChanges();


  }

}
