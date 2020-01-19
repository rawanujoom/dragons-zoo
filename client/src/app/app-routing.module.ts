import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragonsComponent } from './dragons/dragons.component';
import { DragonComponent } from './dragons/dragon/dragon.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/home'},
	{ path: 'home', component:  DragonsComponent },
	{ path: 'dragon/:id', component:  DragonComponent},
	{ path: 'location', component:  LocationComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
