import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoriesService {

  private username: string;
  private clientid = '64d6ff1778b02ddc99d8';
  private clientsecret = '1b3d1f198340208ae963714e0b5163de8ca5a291';

  constructor(private http:  HttpClient) { 
    console.log('service is now ready');
    this.username = 'mercyakuku';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    //  .pipe(map((res: { json: () => any; }) => res.json()));
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      // .pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
  

