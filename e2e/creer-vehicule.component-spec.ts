import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {browser, by, element} from 'protractor';
import { CreerVehiculeComponent } from '../src/app/admin/creer-vehicule/creer-vehicule.component';

describe('CreerVehiculeComponent', () => {
  let component: CreerVehiculeComponent;
  let fixture: ComponentFixture<CreerVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Modal should be open', () => {
    browser.get('http://localhost:4200/').then(function () {
      element.all(by.css('#boutonAjout')).click();
      let modal = element.all(by.css('#modal'));
      expect(modal.getCssValue('display')).toContain('block');
    });
  });

  it('Brand should be valid with proper name', () => {
    browser.get('http://localhost:4200/').then(function () {
      element.all(by.css('#boutonAjout')).click();
      let brand = element.all(by.css('#brand')).first();
      brand.sendKeys("Peugeot")
      expect(brand.getAttribute('class')).toContain('ng-valid');
    });
  });
  it('PlaceAvailable should be valid with correct number', () => {
    browser.get('http://localhost:4200/').then(function () {
      element.all(by.css('#boutonAjout')).click();
      let placeAvailable = element.all(by.css('#placeAvailable')).first();
      placeAvailable.sendKeys(14)
      expect(placeAvailable.getAttribute('class')).toContain('ng-valid');
    });
  });
  it('Immatriculation should be valid with proper name', () => {
    browser.get('http://localhost:4200/').then(function () {
      element.all(by.css('#boutonAjout')).click();
      let immatriculation = element.all(by.css('#immatriculation')).first();
      immatriculation.sendKeys("XX-756-PO")
      expect(immatriculation.getAttribute('class')).toContain('ng-valid');
    });
  });
});
