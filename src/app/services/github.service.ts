import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import { GithubFollower } from '../github-followers/github-follower';


@Injectable()
export class GithubService {
  private url: string = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(private http: HttpClient) {}

  getAll(): Observable< GithubFollower[]> {
    return this.http.get(this.url)
      .pipe(
        map(
          (value) => (value as GithubFollower[])
        )
      );
  }
}
