import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-profil',
  templateUrl: './option-profil.component.html',
  styleUrls: ['./option-profil.component.css']
})
export class OptionProfilComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  nomImage: string;

  @Input()
  urlRedirection: string;

  constructor() { }

  ngOnInit() {
  }

}
