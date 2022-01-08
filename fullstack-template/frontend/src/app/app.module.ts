import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { VotingPhaseComponent } from './pages/Mobile/voting-phase/voting-phase.component';
import { IdeasComponent } from './pages/Walls/ideaWall/ideaWall.component';
import { MobileHomeComponent } from './pages/Mobile/mobile-home/mobile-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMethodComponent } from './pages/Mobile/input-method/input-method.component';
import { JoinComponent } from './pages/Mobile/join/join.component';
import { CreateComponent } from './pages/Mobile/create/create.component';
import { ChooseNameComponent } from './pages/Mobile/choose-name/choose-name.component';
import { CreateModesComponent } from './pages/Mobile/create-modes/create-modes.component';
import { CreateTimerComponent } from './pages/Mobile/create-timer/create-timer.component';
import { CreateOverviewComponent } from './pages/Mobile/create-overview/create-overview.component';
import {WelcomeScreenComponent} from './pages/Walls/welcome-screen/welcome-screen.component';
import {UsersComponent} from './pages/Walls/users/users.component';
import {ScreenControlsComponent} from './pages/Walls/screen-controls/screen-controls.component';
import { WallComponent } from './main-wall/wall/wall.component';



@NgModule({
  declarations: [
    AppComponent,
    VotingPhaseComponent,
    IdeasComponent,
    MobileHomeComponent,
    InputMethodComponent,
    JoinComponent,
    CreateComponent,
    ChooseNameComponent,
    CreateModesComponent,
    CreateTimerComponent,
    CreateOverviewComponent,
    WelcomeScreenComponent,
    UsersComponent,
    ScreenControlsComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
 