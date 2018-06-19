import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../models/user/User';
import { LoginServiceService } from '../services/authentification/login-service.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  formConnexion: FormGroup;

  userForm: User = new User("", "");
  userLog: User;

  constructor(fb: FormBuilder) {
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.formConnexion = fb.group({
      mail: this.emailCtrl,
      password: this.passwordCtrl
    })
  }

  ngOnInit() {
  }

  handleConnexion() {
    this.userLog = new User(this.userForm.password, this.userForm.email);
  }
}
