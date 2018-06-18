import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAuthentificationComponent } from './modal-authentification.component';

describe('ModalAuthentificationComponent', () => {
  let component: ModalAuthentificationComponent;
  let fixture: ComponentFixture<ModalAuthentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAuthentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
