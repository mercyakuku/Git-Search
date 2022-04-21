import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { RepositoriesServiceService } from '../repositories-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos:any;
  profile:any;
  userName!: string;

  constructor(
    private userServiceService:UserServiceService, private repositoriesServiceService:RepositoriesServiceService
  ) { }

  findRepo() {
    this.repositoriesServiceService.updateUser(this.userName);
    this.repositoriesServiceService.getRepoInformation()
    this.repos = this.repositoriesServiceService.repos;
  }


  ngOnInit(): void {
  }

}
