import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {browser, by, element} from 'protractor';

import { GererVehiculesComponent } from '../src/app/admin/gerer-vehicules/gerer-vehicules.component';

describe('GererVehiculesComponent', () => {

  it('It should find a vehicule', () => {
    browser.get('http://localhost:4200/').then(function () {
      let immat = element.all(by.css('#immatFilter')).first();
      immat.sendKeys("XX-123-XX")
      expect(immat.getAttribute('class')).toContain('ng-valid');
    });
  });

  it('It should find a vehicule', () => {
    browser.get('http://localhost:4200/').then(function () {
      let brand = element.all(by.css('#brandFilter')).first();
      brand.sendKeys("Peugeot")
      expect(brand.getAttribute('class')).toContain('ng-valid');
    });
  });
  });

