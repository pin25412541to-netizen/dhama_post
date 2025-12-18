import { Component, inject, signal } from '@angular/core';
import { Post, ReadingPost } from '../../model/post';
import { PostService } from '../../services/post/postService';
import { ReadingPostService } from '../../services/readingPost/reading-post';

interface Menu {
  name: string
  link: string
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  postService = inject(PostService);
  readingPostService = inject(ReadingPostService);

  posts = signal<Post[]>(this.postService.getAllPosts());
  readingPost = signal<ReadingPost[]>(this.readingPostService.getAllPosts());
  title = "บันทึกธรรม"
  menu: Menu[] = [
    {
      name: "ธรรมะสั้นๆ",
      link: "",
    },
    {
      name: "ธรรมะบรรยาย",
      link: ""
    }
  ]
  menuActive = signal<string>(this.menu[0].name)
  isModalOpen = signal(false)
  readPostActive = signal<ReadingPost>(this.readingPost()[0])

  closeModal = ()=>{
    this.isModalOpen.set(false)
  }

  clickReadPost = (index: number)=>{
    this.readPostActive.set(this.readingPost()[index])
    this.isModalOpen.set(true)
  }
  
}
