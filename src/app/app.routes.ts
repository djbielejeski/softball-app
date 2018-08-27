import { Routes } from '@angular/router';
import { LeagueComponent } from '@app/league/league.component';
import { TeamsComponent } from '@app/teams/teams.component';
import { TeamComponent } from '@app/team/team.component';

export const routes: Routes = [
  { path: 'league', component: LeagueComponent },
  { path: 'league/:id', component: TeamsComponent },
  { path: 'team/:id', component: TeamComponent },
  // Wildcard route
  { path: '**', redirectTo: 'league', pathMatch: 'full' }
];
