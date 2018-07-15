import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';
import { HttpClient } from '@angular/common/http';
import { Post } from '../posts/post';


@Injectable()
export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.url)
      .pipe(
        catchError(
          (error: Response) => {
            return throwError(new AppError(error));
          }
        ),
        map( value => (value as Post[]))
      );
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post(this.url, post)
      .pipe(
        catchError(
          (error: Response) => {
            if (error.status === 400) {
              return throwError(new BadInput());
            }
            return throwError(new AppError(error));
          }
        ),
        map( value => (value as Post))
      );
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(
          (error: Response) => {
            if (error.status === 404) {
              return throwError(new NotFoundError());
            }
            return throwError(new AppError(error));
          }
        ),
        map( value => (value as Post))
      );
  }
}
