import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  username: string | undefined; 

  constructor(private userService : UserService) { }
  
  findUser (){
    this.userService.updateUser(this.username);

  }


  ngOnInit(): void {
  }

}
