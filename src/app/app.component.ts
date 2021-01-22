import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Kickstats';
  users: string[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getUsers().subscribe(response => {
      this.users = response['users'];
    }, error => {
      console.log(error);
    })
  }
}
