import { UserData } from './user-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  public userName = 'Cristiano';
  public userFormData: UserData;
  constructor() {
  }
}
