import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { CoreModule } from './core';
import { HttpClientModule } from '@angular/common/http';
import { ChampionComponent } from './components/champion/champion.component';
import { TeamComponent } from './components/team/team.component';
import { BigChampionCardComponent } from './components/big-champion-card/big-champion-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChampionComponent,
    TeamComponent,
    BigChampionCardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
