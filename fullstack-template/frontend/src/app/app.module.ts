import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { VotingPhaseComponent } from './pages/Mobile/voting-phase/voting-phase.component';
import { IdeasComponent } from './pages/Mobile/ideas/ideas.component';
import { MobileHomeComponent } from './pages/Mobile/mobile-home/mobile-home.component';


@NgModule({
  declarations: [
    AppComponent,
    VotingPhaseComponent,
    IdeasComponent,
    MobileHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
 