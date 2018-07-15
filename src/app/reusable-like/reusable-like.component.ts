import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-like',
  templateUrl: './reusable-like.component.html',
  styleUrls: ['./reusable-like.component.css']
})
export class ReusableLikeComponent {

  @Input() isActive: boolean;
  @Input() likesCount: number;

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive?+1:-1; 
  }

}
