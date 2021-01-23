import { Component, Input,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: [ './mentee.component.scss']
})
export class MenteeComponent implements OnInit {
  @Input() onboarding: boolean;
  @Input() matched: boolean;
  @Input() introduced: boolean;
  @Input() schedule: boolean;
  @Input() smart: boolean;
  @Input() sessions: number;
  @Input() sessionsPossible: number;
  @Input() lifetimeSessions: number;
  @Input() lifetimeSessionsPossible: number;
  @Input() rating: number;
  @Input() userName: string;
  @Input() userCompany: string;
  @Input() userJobTitle: string;
  private currentUserData: any[any[any]];
  private currentUserRole: string;
  displayUserData: any[any[any]];
  private displayUserRole: string;


  constructor(private apiService: ApiService) {
    this.currentUserData = apiService.getUserData;
    apiService.getUserData().subscribe((data) => { 
      this.currentUserData = data; 
      this.currentUserRole = data.currentUserData.userData.role;   
    }, error => {console.log(`subscription error: `, error)});

    this.displayUserData = apiService.getMenteeDisplayData;
    apiService.getMenteeDisplayData().subscribe((data) => { 
      console.log(`mentee display data: `, data);
      this.displayUserData = data;    
      console.log(`mentee display data2: `, this.displayUserData);

    }, error => {console.log(`subscription error: `, error)});
  }

  ngOnInit(): void { 
    this.apiService.retrieveUserData();
    //not working when coming from admin table, for some reason teh console logs in teh subscribe above work but this does not. 
    //DOES work when coming from login? 

    console.log(`mentee display data3: `,this.displayUserData);
    this.onboarding = this.displayUserData.currentUserData.userData.onboarding;
    this.matched = this.displayUserData.currentUserData.userData.matched;
    this.introduced = this.displayUserData.currentUserData.userData.introduced;
    this.schedule = this.displayUserData.currentUserData.userData.schedule;
    this.smart = this.displayUserData.currentUserData.userData.smart;
    this.sessions = this.displayUserData.currentUserData.userData.sessions;
    this.sessionsPossible = this.displayUserData.currentUserData.userData.sessionsPossible;
    this.lifetimeSessions = this.displayUserData.currentUserData.userData.lifetimeSessions;
    this.lifetimeSessionsPossible = this.displayUserData.currentUserData.userData.lifetimeSessionsPossible;
    this.rating = this.displayUserData.currentUserData.userData.rating;
    this.userName = this.displayUserData.currentUserData.userData.name;
    this.userCompany = this.displayUserData.currentUserData.userData.company;
    this.userJobTitle = this.displayUserData.currentUserData.userData.jobTitle;
  }

};
