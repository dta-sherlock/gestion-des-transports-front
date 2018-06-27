import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionConfirmationComponent } from './option-confirmation.component';

describe('OptionConfirmationComponent', () => {
  let component: OptionConfirmationComponent;
  let fixture: ComponentFixture<OptionConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
