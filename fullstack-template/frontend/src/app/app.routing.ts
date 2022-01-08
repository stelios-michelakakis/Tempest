import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasComponent } from './pages/Walls/ideaWall/ideaWall.component';
import { MobileHomeComponent } from './pages/Mobile/mobile-home/mobile-home.component';
import { VotingPhaseComponent } from './pages/Mobile/voting-phase/voting-phase.component';
import {JoinComponent} from './pages/Mobile/join/join.component';
import {CreateComponent} from './pages/Mobile/create/create.component';
import {CreateModesComponent} from './pages/Mobile/create-modes/create-modes.component';
import {CreateTimerComponent} from './pages/Mobile/create-timer/create-timer.component';
import {CreateOverviewComponent} from './pages/Mobile/create-overview/create-overview.component';

const routes: Routes = [
  {path:'Mobile', component:MobileHomeComponent,
  children: 
    [
      {path: 'Mobile/join', component: JoinComponent,},
      {path:'Mobile/create', component: CreateComponent,}
    ],
  },
  {path: 'Mobile/join', component: JoinComponent},
  {path:'Wall/ideaWall', component:IdeasComponent},
  {path:'Mobile/voting-phase', component:VotingPhaseComponent},
  {path:'Mobile/create', component:CreateComponent},
  {path:'Mobile/create-modes', component:CreateModesComponent},
  {path:'Mobile/create-timer', component:CreateTimerComponent},
  {path:'Mobile/create-overview', component:CreateOverviewComponent},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

