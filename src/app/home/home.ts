import { Component, inject, signal } from '@angular/core';
import { Post, ReadingPost } from '../../model/post';
import { PostService } from '../../services/post/postService';
import { ReadingPostService } from '../../services/readingPost/reading-post';
import { first, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Menu {
  name: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  postService = inject(PostService);
  readingPostService = inject(ReadingPostService);

  posts = signal<Observable<any[]>>(this.postService.getAllPosts());
  readingPost = signal<Observable<any[]>>(this.readingPostService.getAllPosts());
  title = 'บันทึกธรรม';
  menu: Menu[] = [
    {
      name: 'ธรรมะสั้นๆ',
      link: '',
    },
    {
      name: 'ธรรมะบรรยาย',
      link: '',
    },
  ];
  menuActive = signal<string>(this.menu[0].name);
  isModalOpen = signal(false);
  readPostActive = signal<ReadingPost>({
    title: '',
    message: '',
  });

  constructor() {
    this.readingPost()
      .pipe(first())
      .subscribe((rs) => {
        this.readPostActive.set(rs[0] as ReadingPost);
      });
  }

  closeModal = () => {
    this.isModalOpen.set(false);
  };

  clickReadPost = (title: string, message: string) => {
    this.readPostActive.set({
      title: title,
      message: message,
    });
    this.isModalOpen.set(true);
  };
}
