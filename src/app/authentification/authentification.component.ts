import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../models/user/User';
import { CommonModalComponent } from '../modals/common-modal/common-modal.component';
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

  userPromise: Promise<User>;
  isDriver: boolean = false;
  isAdmin: boolean = false;

  @ViewChild('childModal') childModal: CommonModalComponent;

  constructor(fb: FormBuilder, private loginService: LoginServiceService, private viewContainerRef: ViewContainerRef) {
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
    this.userPromise = this.loginService.sendUser(this.userForm);
    this.userPromise.then(data => {
      if (data.userType == "DRIVER") {
        this.isDriver = true;
      }

      if (data.userType == "ADMIN") {
        this.isDriver = true;
        this.isAdmin = true;
      }

      this.childModal.show()
    });
  }
}
