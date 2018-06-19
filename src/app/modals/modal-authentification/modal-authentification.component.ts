import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-authentification',
  templateUrl: './modal-authentification.component.html',
  styleUrls: ['./modal-authentification.component.css']
})
export class ModalAuthentificationComponent implements OnInit {
  display = 'none';

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }
}