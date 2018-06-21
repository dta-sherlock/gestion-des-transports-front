import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurAccueilComponent } from './chauffeur-accueil.component';

describe('ChauffeurAccueilComponent', () => {
  let component: ChauffeurAccueilComponent;
  let fixture: ComponentFixture<ChauffeurAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
