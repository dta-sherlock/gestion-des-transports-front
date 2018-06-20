import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChauffeurComponent } from './menu-chauffeur.component';

describe('MenuChauffeurComponent', () => {
  let component: MenuChauffeurComponent;
  let fixture: ComponentFixture<MenuChauffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuChauffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
