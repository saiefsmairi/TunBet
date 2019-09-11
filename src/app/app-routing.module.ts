import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballComponent } from './football/football.component';
import { AllSportsComponent } from './all-sports/all-sports.component';


const routes: Routes = [
  {path:'football',component:FootballComponent  },
  {path:'allSports',component:AllSportsComponent  },
  { path: '',    redirectTo: '/allSports',    pathMatch: 'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
