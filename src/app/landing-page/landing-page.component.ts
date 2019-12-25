import { UserData } from './../user-data';
import { UserInformationService } from '../user-information.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnChanges {
  constructor(private formBuilder: FormBuilder, private userInformationService: UserInformationService, private router: Router) {
    this.houseyUserForm = this.formBuilder.group({
      hostName: userInformationService.userName,
      pickingTime: '10',
      darkmode: 'false'
    });

    this.userName = this.houseyUserForm.get('hostName').value;
    this.pickingTime = this.houseyUserForm.get('pickingTime').value;
    this.darkMode = this.houseyUserForm.get('darkmode').value;
  }
  houseyUserForm: FormGroup;
  private userName: string;
  private pickingTime: number;
  private darkMode: boolean;

  userDataModel = new UserData('Ronaldo', 10, false);

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.houseyUserForm);
  }

  onSubmit() {
    this.router.navigateByUrl('/home');
    this.userInformationService.userFormData = this.userDataModel;
    console.log(this.userDataModel, this.userInformationService.userFormData);
  }
}
