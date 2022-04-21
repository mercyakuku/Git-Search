import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserServiceService } from './user-service.service';
import { RepositoriesServiceService }from './repositories-service.service'
import { DatePipe } from './date-pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    LandingPageComponent,
    RepositoriesComponent,
    DatePipe,
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
