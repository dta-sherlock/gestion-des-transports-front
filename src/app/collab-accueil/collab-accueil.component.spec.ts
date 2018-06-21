import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabAccueilComponent } from './collab-accueil.component';

describe('CollabAccueilComponent', () => {
  let component: CollabAccueilComponent;
  let fixture: ComponentFixture<CollabAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
