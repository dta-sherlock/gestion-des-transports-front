import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginServiceService } from '../../services/authentification/login-service.service';
import { User } from '../../models/user/User';

@Component({
  selector: 'app-modal-authentification',
  templateUrl: './modal-authentification.component.html',
  styleUrls: ['./modal-authentification.component.css']
})
export class ModalAuthentificationComponent implements OnInit {
  closeResult: string;

  @Input()
  user: User;

  //Récupère le contenu de la variable template content
  @ViewChild('content')
  modalContent: ElementRef;

  constructor(private modalService: NgbModal, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    const u = change['user'];

    //Si on a déjà envoyé un user
    if (u.currentValue != null) {
      let user = u.currentValue
      this.loginService.sendUser(user).then(data => {
        if (data.userType == "ADMIN") {
          this.openModal(this.modalContent);
        }
      });
    }
  }

  openModal(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}