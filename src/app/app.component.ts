import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Kickstats';
  users: string[] = [];

  constructor(private backendService: BackendService, private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconSet(this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/teams.svg'));
  }

  ngOnInit(): void {
    this.backendService.getUsers().subscribe(response => {
      this.users = response['users'];
    }, error => {
      console.log(error);
    })
  }
}
