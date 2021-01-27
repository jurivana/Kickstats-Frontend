import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.less']
})
export class HighlightCardComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() stats!: [];

  constructor() { }

  ngOnInit(): void {
  }

}
