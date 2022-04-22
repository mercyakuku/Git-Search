import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  userName!: string;
  userService: any;
  userServiceService: any;

  // user!: User;
	// username!: string; 
  // userRepositoriesService: UserRepositoriesService; 
  // public showInput = true; 
  // public showData = false; 


	// submitUsername() {
	// 	this.userRepositoriesService.getUserData(this.username); 
  //   this.showInput = false;
  //   this.showData = true;
	// }

  // showUserInput(hideInput: boolean) {
  //   this.showInput = hideInput;
  //   this.showData = false;
  // }


  constructor() { 
		
    findUser ();
      this.userServiceService.updateUser(this.userName);
  
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
	}

  ngOnInit(); void {
  }


function findUser() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

