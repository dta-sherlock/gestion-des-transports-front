import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../models/user/User';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  mailCtrl: FormControl;
  passwordCtrl: FormControl;
  formConnexion: FormGroup;

  user: User = new User("", "");

  constructor(fb: FormBuilder) {
    this.mailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.formConnexion = fb.group({
      email: this.mailCtrl,
      password: this.passwordCtrl
    })
  }

  ngOnInit() {
  }

}
