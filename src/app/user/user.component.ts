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

  loading = true;
  user: string = '';
  tableType = 'total';
  pointsType = 'total';
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
  highlights = {};
  highlight_small_info = [
    {
      'name': 'goals_per_game',
      'title': 'Tore',
      'subtitle': 'Tore pro Spiel getippt'
    }
  ]
  highlight_info = [
    {
      'name': 'most_four_points',
      'title': 'Volltreffer',
      'subtitle': 'Am öftesten 4 Punkte verdient'
    },
    {
      'name': 'most_points',
      'title': 'Lieblingsteam',
      'subtitle': 'Meiste Punkte verdient'
    },
    {
      'name': 'fewest_points',
      'title': 'Fehleinschätzung',
      'subtitle': 'Wenigste Punkte verdient'
    },{
      'name': 'most_overrated',
      'title': 'Enttäuschung',
      'subtitle': 'Am stärksten überschätzt'
    },
    {
      'name': 'most_underrated',
      'title': 'Überraschung',
      'subtitle': 'Am stärksten unterschätzt'
    }
  ];

  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.loading = true;
      const user = params.get('user');
      if (!user) {
        return;
      }
      this.user = user;
      this.titleService.setTitle('Kickstats - ' + this.user);
      this.tables = [];
      this.points = {};

      this.backendService.getHighlights(this.user).subscribe(response => {
        this.highlights = response;
      }, error => {
        console.log(error);
      })

      this.backendService.getTable(this.user).subscribe(
        (response) => {
          this.tables.push(response['user']);
          this.tables.push(response['real']);
          this.loading = false;
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

  setTableType(event) {
    this.tableType = event.value;
  }

  setPointsType(event) {
    this.pointsType = event.value;
  }
}
