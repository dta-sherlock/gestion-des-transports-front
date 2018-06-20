import {MenuCollabComponent} from '../src/app/menu-collab/menu-collab.component';
import {MenuChauffeurComponent} from '../src/app/menu-chauffeur/menu-chauffeur.component';
import {MenuAdminComponent} from '../src/app/menu-admin/menu-admin.component';

describe('Menus App', () => {
  let menuCollab: MenuCollabComponent;
  let menuChauffeur: MenuChauffeurComponent;
  let menuAdmin: MenuAdminComponent;
  beforeEach(() => {
    menuCollab = new MenuCollabComponent();
    menuChauffeur =  new MenuChauffeurComponent();
    menuAdmin = new MenuAdminComponent();
  });

  it('should display a menu message', () => {

  });
});
