import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionProfilComponent } from './option-profil.component';

describe('OptionProfilComponent', () => {
  let component: OptionProfilComponent;
  let fixture: ComponentFixture<OptionProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
