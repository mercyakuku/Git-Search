import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
 
  user:User;
	username: string; // Gotten from the form username input
	searchGithubService:SearchGithubService; // Declare the searchGithubService which is of type SearchGithubService we imported from src/app/search-github.service  
  public showInput = true; // Assign showInput boolean value true
  public showData = false; // Assign showData boolean value false


	submitUsername() {
		this.searchGithubService.getUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
    this.showInput = false;
    this.showData = true;
	}

  showUserInput(hideInput) {
    this.showInput = hideInput;
    this.showData = false;
  }

  // We first import the service SearchGithubService class.Then inject the service into our Component’s constructor and we assign it to an searchGithubService property
  


  // username: string | undefined; 

  // constructor(private userService : UserService) { }
  
  // findUser (){
  //   this.userService.updateUser(this.username);

  // }


  constructor(searchGithubService:SearchGithubService) { 
		this.searchGithubService = searchGithubService;
	}

  ngOnInit(): void {
  }

}
