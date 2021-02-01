const { assert } = require('chai');
const internetPage = require('../pages/internet.page');

describe('webdriverIO API Actions', function () {
  it('should hover on figure 1', () => {
    browser.url(`${browser.options.baseUrl}hovers`); //appending /hovers onto the base url
    internetPage.hoverOnFigure(3);
    assert.equal('name: user1', internetPage.getFigureDetailsText(3));
  });

  it('should hover on figure 2', () => {
    browser.url(`${browser.options.baseUrl}hovers`); //appending /hovers onto the base url
    internetPage.hoverOnFigure(4);
    assert.equal('name: user2', internetPage.getFigureDetailsText(4));
  });

  it('should hover on figure 3', () => {
    browser.url(`${browser.options.baseUrl}hovers`); //appending /hovers onto the base url
    internetPage.hoverOnFigure(5);
    assert.equal('name: user3', internetPage.getFigureDetailsText(5));
  });

  it('should send keyboard value Backspace', () => {
    browser.url(`${browser.options.baseUrl}key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget('Backspace');
    assert.equal('You entered: BACK_SPACE', internetPage.getResultText());
    browser.pause(300);
  });

  it('should send keyboard value Tab', () => {
    browser.url(`${browser.options.baseUrl}key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget('Tab');
    assert.equal('You entered: TAB', internetPage.getResultText());
    browser.pause(300);
  });

  it('should send keyboard value Delete', () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget('Delete');
    assert.equal('You entered: DELETE', internetPage.getResultText());
    browser.pause(300);
  });
});
