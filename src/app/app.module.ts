import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberBoardComponent } from './number-board/number-board.component';
import { NumberGeneratorComponent } from './number-generator/number-generator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HouseyBoardComponent } from './housey-board/housey-board.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberBoardComponent,
    NumberGeneratorComponent,
    LandingPageComponent,
    HouseyBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
