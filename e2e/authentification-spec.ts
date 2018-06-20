import { browser, element, by } from "protractor";
import { AppPage } from "./app.po";

describe('Front App - Login', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it('Login form should be invalid by default', () => {
        browser.get('http://localhost:4200/').then(function () {
            let formLogin = element.all(by.css('#formLogin')).first();
            expect(formLogin.getAttribute('class')).toContain('ng-invalid');
        });
    });

    it('Submit button should be disabled if form is invalid', () => {
        browser.get('http://localhost:4200/').then(function () {
            let formLogin = element.all(by.css('#formLogin')).first();
            let buttonSubmit = element.all(by.css('#btnLoginSubmit'));
            expect(formLogin.getAttribute('class')).toContain('ng-invalid');
            expect(buttonSubmit.getAttribute('disabled')).toContain('true');
        });
    });

    it('Login should be valid with proper email', () => {
        browser.get('http://localhost:4200/').then(function () {
            let inputLogin = element.all(by.css('#inputLogin')).first();
            inputLogin.sendKeys("test@mail.com")
            expect(inputLogin.getAttribute('class')).toContain('ng-valid');
        });
    });

    it('Login should be invalid with incorrect email', () => {
        browser.get('http://localhost:4200/').then(function () {
            let inputLogin = element.all(by.css('#inputLogin')).first();
            inputLogin.sendKeys("notamail")
            expect(inputLogin.getAttribute('class')).toContain('ng-invalid');
        });
    });

    it('Modal should show up on submit', () => {
        browser.get('http://localhost:4200/').then(function () {
            let inputLogin = element.all(by.css('#inputLogin')).first();
            let inputPassword = element.all(by.css('#inputPassword')).first();
            let modal = element.all(by.css('#modal')).first();

            inputLogin.sendKeys("test@mail.com");
            inputPassword.sendKeys("testpassword");

            element.all(by.css('#btnLoginSubmit')).click();

            expect(modal.getCssValue('display')).toContain('block');
        });
    });
})