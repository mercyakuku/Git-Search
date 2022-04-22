import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserServiceService } from './user-service.service';
import { RepositoriesServiceService }from './repositories-service.service'
import { DatePipe } from './date-pipe';
>>>>>>> 5bc0a783cd04d7588ea9044f0920fb4407a8a357


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    
=======
    NavbarComponent,
    SearchFormComponent,
    LandingPageComponent,
    RepositoriesComponent,
    DatePipe,
>>>>>>> 5bc0a783cd04d7588ea9044f0920fb4407a8a357
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService, RepositoriesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
