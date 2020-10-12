import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionComponent } from './components/champion/champion.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path: '', redirectTo: 'champion', pathMatch: 'full'},
  {path: 'champion', component: ChampionComponent},
  {path: 'team', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
