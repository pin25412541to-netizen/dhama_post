import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../model/post';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  items$: Observable<any[]>;
  
  constructor(private firestore: Firestore) {
    const itemCollection = collection(this.firestore, 'caption');
    this.items$ = collectionData(itemCollection);
  }

  getAllPosts() {
    return this.items$
  }
}
