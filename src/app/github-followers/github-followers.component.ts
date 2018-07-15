import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { GithubFollower } from './github-follower';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: GithubFollower[];

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll().subscribe((value)=>this.followers=value);
  }

}
