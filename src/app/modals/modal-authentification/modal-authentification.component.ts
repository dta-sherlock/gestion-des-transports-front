//Import core
import { Component } from '@angular/core';
//Import ng-bootstrap dependencies
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-authentification',
  templateUrl: './modal-authentification.component.html',
  styleUrls: ['./modal-authentification.component.css']
})
export class ModalAuthentificationComponent {
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content) {
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