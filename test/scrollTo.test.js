const { assert } = require('chai');
const internetPage = require('../pages/internet.page');

describe('Scroll to element', function () {
  it.skip('should scroll to the page footer', () => {
    browser.url('/');
    internetPage.pageHeader.waitForDisplayed();
    internetPage.scrollToPageFooter(); //trows an error, move out of bounds. This seems to be a know bug.
    assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    browser.pause(3000);
  });

  it('should scroll to the page footer', () => {
    browser.url('/');
    internetPage.pageHeader.waitForDisplayed();
    internetPage.pageFooter.scrollIntoView();
    assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    browser.pause(3000);
  });
});
