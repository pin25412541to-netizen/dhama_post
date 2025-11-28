import { Component, inject, signal } from '@angular/core';
import { Post } from '../../model/post';
import { PostService } from '../../services/post/postService';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  postService = inject(PostService);
  posts = signal<Post[]>(this.postService.getAllPosts());
}
