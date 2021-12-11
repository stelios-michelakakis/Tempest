import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { VotingPhaseComponent } from './pages/Mobile/voting-phase/voting-phase.component';
import { IdeasComponent } from './pages/Mobile/ideas/ideas.component';
import { MobileHomeComponent } from './pages/Mobile/mobile-home/mobile-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '@angular/material';

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
    MaterialModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 