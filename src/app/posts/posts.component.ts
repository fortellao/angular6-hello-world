import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor(private service: PostService) {}

  posts: Post[];

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      {
        next: (avalue: Post[]) => {
          this.posts = avalue;
        }
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: Post = { title: input.value }
    
    this.service.createPost(post).subscribe(
      {
        next: (newPost: Post) => {
          post.id = newPost.id;
          this.posts.splice(0,0,post);
          console.log(newPost);
        },
        error: (error: AppError) => {
          if (error instanceof BadInput){
            alert('Bad input. Bad bad bad');
          }
          else throw error;
        },
        complete: () => {
          console.log('CREATION COMPLETE')
        }
      }
    )
  }

  deletePost(post: Post) {
    this.service.deletePost(post.id).subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError){
            alert('Shit! it doesn\'t exist anymore');
          }
          else throw error;
        }
    );
  }
}
