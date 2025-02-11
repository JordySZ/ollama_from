import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './components/lol/chat.component';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lol', pathMatch: 'full' }, 

  { path: 'lol', component: ChatComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}