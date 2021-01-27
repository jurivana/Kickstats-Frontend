import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-card-overview',
  templateUrl: './highlight-card-overview.component.html',
  styleUrls: ['./highlight-card-overview.component.less']
})
export class HighlightCardOverviewComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() stats!: [];

  constructor() { }

  ngOnInit(): void {
  }

}
