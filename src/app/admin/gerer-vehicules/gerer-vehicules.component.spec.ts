
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {async} from "@angular/core/testing";
import { GererVehiculesComponent } from './gerer-vehicules.component';

describe('GererVehiculesComponent', () => {
  let component: GererVehiculesComponent;
  let fixture: ComponentFixture<GererVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererVehiculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  });

