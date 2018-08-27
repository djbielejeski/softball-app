import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRootComponent } from '@app/app-root/app-root.component';
import { LeagueComponent } from '@app/league/league.component';
import { TeamsComponent } from '@app/teams/teams.component';
import { TeamComponent } from '@app/team/team.component';

import * as services from '@app/shared/services';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppRootComponent,
    LeagueComponent,
    TeamsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    services.LeagueService,
    services.PlayerService,
    services.TeamService
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
