//importing the class
const internetPage = require('../pages/internet.page');

describe('Interaction with elements', function () {
  it('Get text for element', () => {
    // the / indicates we'll use the base URL setup in the wdio.config.js file
    browser.url('/');
    let text = $("//*[@id='page-footer']").getText();
    console.log(text);
    // call internetPage with the function getLiText
    internetPage.getLiText();
    internetPage.getSpecificElementText(3);
  });

  it('Is footer displayd?', () => {
    console.log(internetPage.pageFooter.isDisplayed());
  });

  it('Does the header exist?', () => {
    console.log(internetPage.pageHeader.isExisting());
  });

  it('Is the pageFooter in viewport?', () => {
    console.log(internetPage.pageFooter.isDisplayedInViewport());
  });

  it('Is the pageHeader in viewport?', () => {
    console.log(internetPage.pageHeader.isDisplayedInViewport());
  });

  it('Is the subheader enabled?', () => {
    console.log(internetPage.subHeading.isEnabled());
  });

  it('Click Element', () => {
    internetPage.clickOnLink();
  });
});
