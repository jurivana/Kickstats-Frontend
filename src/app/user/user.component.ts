import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  user: string = '';
  tables = {};
  points = {};

  constructor(private backendService: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const user = this.route.snapshot.paramMap.get('user');
    if (!user) {
      return;
    }
    this.user = user;
    this.backendService.getTable(this.user).subscribe(response => {
      this.tables = response;
    }, error => {
      console.log(error);
    });

    this.backendService.getPoints(this.user)?.subscribe(response => {
      this.points = response;
    }, error => {
      console.log(error);
    })
  }

}
