import {MenuCollabComponent} from '../src/app/menu-collab/menu-collab.component';
import {MenuChauffeurComponent} from '../src/app/menu-chauffeur/menu-chauffeur.component';
import {MenuAdminComponent} from '../src/app/menu-admin/menu-admin.component';
import {CollabAccueilComponent} from '../src/app/collab-accueil/collab-accueil.component';
import {AdminAccueilComponent} from '../src/app/admin-accueil/admin-accueil.component';
import {ChauffeurAccueilComponent} from '../src/app/chauffeur-accueil/chauffeur-accueil.component';
import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('Menus App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a menu Collab', () => {
    browser.get('http://localhost:4200/').then(function () {
      let inputLogin = element.all(by.css('#inputLogin')).first();
      let inputPassword = element.all(by.css('#inputPassword')).first();


      inputLogin.sendKeys("test@mail.com");
      inputPassword.sendKeys("testpassword");
      element.all(by.css('#btnLoginSubmit')).click();
      element.all(by.css('#collabModal')).click();
      expect(element.all(by.css('#menuCollab')).isDisplayed());
    });
  });


  it('should display a menu Chauffeur', () => {
    browser.get('http://localhost:4200/').then(function () {
      let inputLogin = element.all(by.css('#inputLogin')).first();
      let inputPassword = element.all(by.css('#inputPassword')).first();


      inputLogin.sendKeys("test@mail.com");
      inputPassword.sendKeys("testpassword");
      element.all(by.css('#btnLoginSubmit')).click();
      element.all(by.css('#chauffeurModal')).click();
      expect(element.all(by.css('#menuChauffeur')).isDisplayed());
    });
  });

  it('should display a menu Admin', () => {
    browser.get('http://localhost:4200/').then(function () {
      let inputLogin = element.all(by.css('#inputLogin')).first();
      let inputPassword = element.all(by.css('#inputPassword')).first();


      inputLogin.sendKeys("test@mail.com");
      inputPassword.sendKeys("testpassword");
      element.all(by.css('#btnLoginSubmit')).click();
      element.all(by.css('#adminModal')).click();
      expect(element.all(by.css('#menuAdmin')).isDisplayed());
    });
  });
});
