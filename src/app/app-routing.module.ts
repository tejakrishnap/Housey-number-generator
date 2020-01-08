import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HouseyBoardComponent } from './housey-board/housey-board.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', component: HouseyBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
