import { Component, OnInit } from '@angular/core';
import { User } from '../models/user/User';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  user: User = new User("", "");
  
  constructor() { }

  ngOnInit() {
  }

}
