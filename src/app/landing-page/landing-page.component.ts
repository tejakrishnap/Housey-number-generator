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
  constructor(private formBuilder: FormBuilder,
              private userInformationService: UserInformationService,
              private router: Router) {}

  userDataModel = new UserData('Elvis Presly', 10, false);

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onSubmit() {
    this.router.navigateByUrl('/home');
    this.userInformationService.userFormData = this.userDataModel;
  }
}
