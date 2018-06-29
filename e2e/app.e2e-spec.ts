import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('front App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Title should be Front', () => {
    browser.get('http://localhost:4200/').then(function () {
      expect(browser.getTitle()).toEqual('Front');
    });
    it('should display welcome message', () => {
      page.navigateTo();
      expect(page.getParagraphText()).toEqual('Véhicules');
    });

  });
}

