import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasComponent } from './pages/Walls/ideaWall/ideaWall.component';
import { MobileHomeComponent } from './pages/Mobile/mobile-home/mobile-home.component';
import { VotingPhaseComponent } from './pages/Mobile/voting-phase/voting-phase.component';


const routes: Routes = [
  {path:'Mobile/mobile-home', component:MobileHomeComponent},
  {path:'Wall/ideaWall', component:IdeasComponent},
  {path:'Mobile/voting-phase', component:VotingPhaseComponent},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
