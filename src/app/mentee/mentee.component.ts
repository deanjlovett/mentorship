import { Component, Input,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: [ './mentee.component.scss']
})
export class MenteeComponent implements OnInit {

  constructor(private apiService: ApiService, 
    private router: Router) { }

  currentUserData: any[any[any]];

  @Input() onboarding: boolean;
  @Input() matched: boolean;
  @Input() introduced: boolean;
  @Input() schedule: boolean;
  @Input() smart: boolean;


  ngOnInit(): void {
    const getComponentData = async () => {

      let fetchedData = await this.apiService.retrieveUserData();
      this.currentUserData = fetchedData;

      this.onboarding = this.currentUserData.currentUserData.userData.onboarding;
      this.matched = this.currentUserData.currentUserData.userData.matched;
      this.introduced = this.currentUserData.currentUserData.userData.introduced;
      this.schedule = this.currentUserData.currentUserData.userData.schedule;
      this.smart = this.currentUserData.currentUserData.userData.smart;
    }

    getComponentData();
  }






}
