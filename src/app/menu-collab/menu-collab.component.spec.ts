import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCollabComponent } from './menu-collab.component';

describe('MenuCollabComponent', () => {
  let component: MenuCollabComponent;
  let fixture: ComponentFixture<MenuCollabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCollabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
