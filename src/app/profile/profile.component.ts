import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    ).subscribe(
      (combined) => {
        console.log('>>>>>>>>>>>>>>>')
        console.log('username: ' + combined[0].get('username'));
        console.log('query: ' + combined[1].get('query'));
        console.log('other: ' + combined[1].get('other'));
      }
    )
    

    // this.route.paramMap
    //   .subscribe(
    //     (param: ParamMap) => {
    //       console.log(param);
    //       console.log(param.get('username'));
    //     }
    //   );
  
    // this.route.queryParamMap.subscribe(
    //   (params: ParamMap) => {
    //     console.log(params.get('query'));
    //     console.log(params.get('other'));
    //   }
    // );
  }

}
