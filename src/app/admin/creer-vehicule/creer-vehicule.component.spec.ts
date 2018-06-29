import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CreerVehiculeComponent} from "./creer-vehicule.component";

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
