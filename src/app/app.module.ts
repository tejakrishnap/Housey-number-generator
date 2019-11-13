import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberBoardComponent } from './number-board/number-board.component';
import { NumberGeneratorComponent } from './number-generator/number-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberBoardComponent,
    NumberGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
