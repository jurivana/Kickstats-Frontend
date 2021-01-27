import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less'],
})
export class OverviewComponent implements OnInit {
  loading = false;
  meta = {};
  highlights = {};
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
      'title': 'Träumer',
      'subtitle': 'Am stärksten überschätzt'
    },
    {
      'name': 'most_underrated',
      'title': 'Überraschung',
      'subtitle': 'Am stärksten unterschätzt'
    },
    {
      'name': 'most_goals',
      'title': 'Schützenfest',
      'subtitle': 'Meiste Tore pro Spiel getippt'
    },
    {
      'name': 'fewest_goals',
      'title': 'Langweiler',
      'subtitle': 'Wenigste Tore pro Spiel getippt'
    },
    {
      'name': 'most_points_total',
      'title': 'Vorhersehbar',
      'subtitle': 'Meiste Punkte insgesamt verdient'
    },
    {
      'name': 'fewest_points_total',
      'title': 'Unberechenbar',
      'subtitle': 'Wenigste Punkte insgesamt verdient'
    }
  ];

  constructor(
    private backendService: BackendService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Kickstats');
    this.updateData();
  }

  update() {
    this.loading = true;
    this.backendService.update().subscribe(
      (response) => {
        this.updateData()
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  getMeta() {
    this.backendService.getMeta().subscribe(response => {
      this.meta = response;
    }, error => {
      console.log(error);
    })
  }

  getHighlights() {
    this.backendService.getHighlights().subscribe(response => {
      this.highlights = response;
    }, error => {
      console.log(error);
    })
  }

  updateData() {
    this.getMeta();
    this.getHighlights();
  }
}
