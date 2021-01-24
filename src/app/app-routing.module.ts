import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { UserComponent } from './user/user.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'user/:user', component: UserComponent },
  { path: 'team/:team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
