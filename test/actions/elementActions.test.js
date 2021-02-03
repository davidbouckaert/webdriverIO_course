const { expect, assert } = require('chai');
const loginData = require('../../data/loginData');
const internetPage = require('../../pages/internet.page');
const { getSpecificElementText } = require('../../pages/internet.page');

describe('Test element actions', function () {
  it('should click the element', () => {
    browser.url('/');
    internetPage.clickOnLink();
    expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest');
  });

  it('should get text', () => {
    // because we've clicked on an url in the previous test, we need to go back to the root page.
    browser.url('/');
    // we'll verify index number 1 of the homepage.
    expect(internetPage.getSpecificElementText(1)).equals('A/B Testing');
  });

  it('should click checkbox', () => {
    // 6 is the index number of the items of the list, EG: the sixth link. This is passed to the method (created in the internet.page.js file) that takes an index number.
    // First we click on the sixth link to go to the checkbox page, where we then click the first checkbox.
    internetPage.clickLink(6);
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(true);
  });

  it('should uncheck checkbox 1', () => {
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(false);
  });

  it('should enter the username', () => {
    //First go to the correct page by appending /login to our base url (found in wdio.conf.js)
    browser.url(`${browser.options.baseUrl}login`);
    internetPage.enterUsername(loginData.userName);
    // compares the string 'admin' against the value of the 'username' element defined in internet.page.js
    assert.equal(loginData.userName, internetPage.username.getValue());
  });

  it('should enter the password', () => {
    //First go to the correct page by appending /login to our base url (found in wdio.conf.js)
    browser.url(`${browser.options.baseUrl}login`);
    internetPage.enterPassword(loginData.password);
    // compares the string 'admin' against the value of the 'password' element defined in internet.page.js
    assert.equal(loginData.password, internetPage.password.getValue());
  });

  it('should clear the value', () => {
    internetPage.username.click();
    internetPage.username.clearValue();
    assert.equal('', internetPage.username.getValue());
  });
});
