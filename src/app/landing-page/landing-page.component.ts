import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user:User; // Property we'll use in our git-search-results.component.html to render the User instances
  repoDetails = []; // Property we'll use in our git-search-results.component.html to render the Repository instances
  searchGithubService:SearchGithubService; // Declare the searchGithubService which is of type SearchGithubService we imported from src/app/search-github.service  
  hideInput:boolean; // Declare hideinput as a boolean property


    //users:User;

    // profile: any;
    // repos: any;
    // userName: string;

  constructor() { 
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

    // private userService: UserService, private repositoryService: RepositoryService

    // ) {
    //   this.userService.getUsers().subscribe(profile => {
    //     console.log(profile);
    //     this.profile = profile;
    //   });
  
    //   this.userService.getRepos().subscribe(repos => {
    //     console.log(repos);
    //     this.repos = repos;
    //   })
  
    // }
  
  
    // findUser() {
    //   this.userService.updateUser(this.userName);
    //   this.userService.getUserInfo()
    //   this.profile = this.userService.profile;
  
    //   this.repositoryService.updateUser(this.userName);
    //   this.repositoryService.getRepoInformation()
    //   this.repos = this.repositoryService.repos;
    // }
  

  ngOnInit() {
    // ngOnInit is a lifecycle hook. It is called each time the component is created.
  		this.user = this.searchGithubService.user; // / Get the Response from SearchGithubService from user then assign it to user which we'll use to render the instances of User on the HTML
      this.repoDetails = this.searchGithubService.repoData; // Get the Response from SearchGithubService from repoData array then assign it to repoDetails which we'll use to render the instances of Repository on the HTML

  }

}
