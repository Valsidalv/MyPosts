import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  hideMe = [];
  displaySpin = false;

  constructor(private postService: PostService) {
    
  }

  ngOnInit() {
    this.displaySpin = true;
    setTimeout(() => {
      this.getPosts();
      this.displaySpin = false;
    }, 2000);
  }

  getPosts() {
      this.postService.getPosts()
        .subscribe(
          posts => this.posts = posts);
  }

  addPost(title: string, body: string) {
    if (!title && !body) { 
      alert("Both fields must not be empty!");
      return; 
    }

    this.postService.addPost({ title, body } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(p => p !== post);
    this.postService.deletePost(post).subscribe();
  }
}
