import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {
  @ViewChild('tabs', { static: false }) tabs;
  user: string = '';
  displayedTableColumns = [
    'rank',
    'rank_diff',
    'logo',
    'team',
    'games',
    'wins',
    'draws',
    'losses',
    'goals',
    'goals_against',
    'diff',
    'points',
  ];
  displayedPointColumns = [
    'rank',
    'logo',
    'team',
    'zero_points',
    'two_points',
    'three_points',
    'four_points',
    'points',
  ];
  tables: Object[] = [];
  points = {};

  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const user = params.get('user');
      if (!user) {
        return;
      }
      this.user = user;
      this.titleService.setTitle('Kickstats - ' + this.user);
      this.tables = [];
      this.points = {};

      this.backendService.getTable(this.user).subscribe(
        (response) => {
          this.tables.push(response['user']);
          this.tables.push(response['real']);
        },
        (error) => {
          console.log(error);
        }
      );

      this.backendService.getPoints(this.user).subscribe(
        (response) => {
          this.points = response;
        },
        (error) => {
          console.log(error);
        }
      );
      setTimeout(() => {
        this.tabs.realignInkBar();
      }, 500);
    });
  }
}
