import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  update() {
    this.backendService.update().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
