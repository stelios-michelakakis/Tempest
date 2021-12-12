import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { VotingPhaseComponent } from './pages/Mobile/voting-phase/voting-phase.component';
import { IdeasComponent } from './pages/Mobile/ideas/ideas.component';
import { MobileHomeComponent } from './pages/Mobile/mobile-home/mobile-home.component';
<<<<<<< HEAD
//import {MatButtonModule} from '@angular/material/button';
=======
>>>>>>> 606e240c008ed9354ddd82f024842b620e98e0eb

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
<<<<<<< HEAD
    AppRoutingModule
    //MatButtonModule
=======
    AppRoutingModule,
>>>>>>> 606e240c008ed9354ddd82f024842b620e98e0eb
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
 