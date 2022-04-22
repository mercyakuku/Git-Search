import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  { path:"User",component:LandingPageComponent}, 
	{ path:"Repositories",component:RepositoriesComponent },
];

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
],
  
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
