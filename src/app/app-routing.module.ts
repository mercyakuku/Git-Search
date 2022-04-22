import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  // { path:"User",component:}, 
 	// { path:"Repositories",component:}, 
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
