import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title: string;

  deployed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.deployed = !this.deployed;
  }

}
