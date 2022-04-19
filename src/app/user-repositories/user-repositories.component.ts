import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';
import {SearchGithubService} from '../search-github.service';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {
  
  user!: User; // Property we'll use in our git-search-results.component.html to render the User instances
 // Property we'll use in our git-search-results.component.html to render the User instances
    repoDetails = []; // Property we'll use in our git-search-results.component.html to render the Repository instances
    searchGithubService:SearchGithubService; // Declare the searchGithubService which is of type SearchGithubService we imported from src/app/search-github.service  
    hideInput!: boolean; // Declare hideinput as a boolean property
 // Declare hideinput as a boolean property

    // We first import the service SearchGithubService class.Then inject the service into our Component’s constructor and we assign it to an searchGithubService property
  constructor(searchGithubService:SearchGithubService) { 
  this.searchGithubService = searchGithubService;
}

// used the Output decorator to define toggleBack as an EventEmitter
@Output() toggleBack = new EventEmitter();

goBack(){
  this.hideInput = true;
  this.toggleBack.emit(this.hideInput);
}

// ngOnInit is a lifecycle hook. It is called each time the component is created.
ngOnInit() {
  this.user = this.searchGithubService.user; // / Get the Response from SearchGithubService from user then assign it to user which we'll use to render the instances of User on the HTML
  this.repoDetails = this.searchGithubService.repoData; // Get the Response from SearchGithubService from repoData array then assign it to repoDetails which we'll use to render the instances of Repository on the HTML
}



}

