import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRepositoriesService } from './services/user-repositories.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRepositoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRepositoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
