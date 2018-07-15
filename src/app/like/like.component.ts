import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  isLiked = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isLiked = !this.isLiked;
  }

}
