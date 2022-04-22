import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  profile: any;
  repos: any;
  userName!: string;
  userServiceService: any;
  repositoriesServiceService: any;


  constructor(

    ) {
      this.userServiceService.getUsers().subscribe((profile: any) => {
        console.log(profile);
        this.profile = profile;
      });
  
      this.repositoriesServiceService.getRepos().subscribe((repos: any) => {
        console.log(repos);
        this.repos = repos;
      })
  
    }
  
  
    findUser() {
      this.userServiceService.updateUser(this.userName);
      this.userServiceService.getUserInfo()
      this.profile = this.userServiceService.profile;
  
      this.repositoriesServiceService.updateUser(this.userName);
      this.repositoriesServiceService.getRepoInformation()
      this.repos = this.repositoriesServiceService.repos;
    }
  

  ngOnInit(): void {
  }

}
