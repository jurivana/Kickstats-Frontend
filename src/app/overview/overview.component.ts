import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less'],
})
export class OverviewComponent implements OnInit {
  constructor(
    private backendService: BackendService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Kickstats');
  }

  update() {
    this.backendService.update().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
