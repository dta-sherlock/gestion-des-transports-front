import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCovoiturageComponent } from './details-covoiturage.component';

describe('DetailsCovoiturageComponent', () => {
  let component: DetailsCovoiturageComponent;
  let fixture: ComponentFixture<DetailsCovoiturageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCovoiturageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCovoiturageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
