import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() private _profil: {name: number};

  constructor() {
    }
  get profil(): { name: number } {
    return this._profil;
  }

  set profil(value: { name: number }) {
    this._profil = value;
  }

  ngOnInit() {
  }

}
