import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts;
  url = 'http://jsonplaceholder.typicode.com/posts/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient){}

  addPost(post): Observable<Post>  {
    return this.http.post<Post>(this.url, post, this.httpOptions);
  }

  deletePost (post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Post>(url, this.httpOptions);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  searchPosts(term: string): Observable<Post[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Post[]>(`${this.url}?id=${term}`);
    
  }
}
