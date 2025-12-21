import { Injectable } from '@angular/core';
import { ReadingPost } from '../../model/post';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReadingPostService {
  items$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const itemCollection = collection(this.firestore, 'lecture');
    this.items$ = collectionData(itemCollection);
  }

  getAllPosts() {
    return this.items$;
  }
}
