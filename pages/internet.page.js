const { assert } = require('chai');

class Internet {
  //#region page objects
  get pageHeader() {
    return $('h1.heading');
  }

  get subHeading() {
    return $('h2');
  }

  get h3Header() {
    return $('h3');
  }

  get pageFooter() {
    return $('#page-footer');
  }

  // get the parent unlist item
  get parent() {
    return $('ul');
  }

  // get child element in the unlist item
  get childElements() {
    return this.parent.$$('li');
  }

  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  get firstLink() {
    return $('ul li:nth-child(1) a');
  }

  link(index) {
    return $(`ul li:nth-child(${index}) a`);
  }

  // create an array with all child elements in, and log the result to the console
  getLiText() {
    this.childElements.filter((element) => {
      console.log(element.getText());
    });
  }

  get username() {
    return $('#username');
  }

  get password() {
    return $('#password');
  }

  figures(index) {
    return $(`.example .figure:nth-child(${index}) img`);
  }

  figureDetails(index) {
    return $(`.example .figure:nth-child(${index}) .figcaption h5`);
  }

  get target() {
    return $(`.example #target`);
  }

  get result() {
    return $(`.example #result`);
  }

  get hereLink() {
    return $(`.example a`);
  }

  get iframeBody() {
    return $('#tinymce');
  }

  get iframe() {
    return $('.tox-edit-area #mce_0_ifr');
  }

  get columnA() {
      return $('#column-a')
  }

  get columnB() {
      return $('#column-b')
  }

  get columnAHeader() {
      return $('#column-a header')
  }

  get columnBHeader() {
      return $('#column-b header')
  }

  get draggable() {
      return $('#draggable')
  }

  get droppable() {
      return $('#droppable')
  }

  get droppableResult() {
      return $('#droppable p')
  }

  get dropdownMenu () {
    return $('#dropdown')
  }

  get dropdownMenuOption1() {
    return $('#dropdown option:nth-child(2)')
  }

  get dropdownMenuOption2() {
    return $('#dropdown option:nth-child(3)')
  }

  javaScriptAlertButton (index) {
    return $(`.example li:nth-child(${index}) button`)
  }

  get enableButton() {
    return $('#input-example button')
  }

  get inputEnabledField() {
    return $('#input-example input')
  }

  get exampleButton () {
    return $('.example button')
  }

  deleteButton (index) {
    return $(`#elements button:nth-child(${index})`)
  }

  //#endregion

  //#region functions
  
  clickExampleButton() {
    this.exampleButton.waitForDisplayed()
    this.exampleButton.click()
  }

  clickDeleteButton(index) {
    this.deleteButton(index).waitForDisplayed()
    this.deleteButton(index).click()
  }
  /**
   * Click the enable button
   */
  clickEnableButton() {
    this.enableButton.waitForDisplayed()
    this.enableButton.click()
  }
   /**
   * Drag and drop
   */
  dragDraggableToDroppable() {
    this.draggable.waitForDisplayed()
    this.draggable.dragAndDrop(this.droppable)
  }

  /**
   * Drag box A to box B
   */
  dragColumnAToColumnB() {
      this.columnA.waitForDisplayed()
      this.columnA.dragAndDrop(this.columnB)
  }

  /**
   * Enter text into the iframe
   * @param {string} text the text to send
   */
  sendTextToBody(text) {
      this.iframeBody.waitForDisplayed()
      this.iframeBody.clearValue()
      this.iframeBody.click() //before you can send keys, you need to click the element
      this.iframeBody.keys(text)
  }

  /**
   * Click the "click here" link
   */
  clickHereLink() {
    this.hereLink.waitForDisplayed();
    this.hereLink.click();
  }

  /**
   * Scrolls to the page footer
   */
  scrollToPageFooter() {
    this.pageFooter.moveTo();
  }

  /**
   * click the target input field
   */
  clickTarget() {
    this.target.waitForDisplayed();
    this.target.click();
  }

  /**
   * Sending keyboard keys to into the target field
   * @param {String} text the keyboard text to enter
   */
  sendKeysToTarget(text) {
    this.target.waitForDisplayed();
    this.target.keys(text);
  }

  /**
   * Return the text of the result element
   */
  getResultText() {
    this.result.waitForDisplayed();
    return this.result.getText();
  }

  /**
   * Hovers over the specified image
   * @param {Number} index the specific index of the image
   */
  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed();
    this.figures(index).moveTo(1, 1);
  }

  /**
   * Return the text of the figure details
   * @param {Number} index
   * @returns returns the value of the h5 element after hovering, so we can use it later for assertion.
   */
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed();
    return this.figureDetails(index).getText();
  }

  /**
   * Enter the username into the field
   * @param {string} text username to be entered
   */
  enterUsername(text) {
    this.username.waitForDisplayed();
    this.username.setValue(text);
  }

  /**
   * Enter the password into the field
   * @param {string} text password to be entered
   */
  enterPassword(text) {
    this.password.waitForDisplayed();
    this.password.setValue(text);
  }

  /**
   * Clicks on the link, based on the index provided
   * @param {Number} index the index of the element
   */
  clickLink(index) {
    this.link(index).waitForDisplayed();
    this.link(index).click();
  }

  checkboxes(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  }

  clickCheckbox(index) {
    this.checkboxes(index).waitForDisplayed();
    this.checkboxes(index).click();
  }

  getSpecificElementText(index) {
    // this waits until the element is displayed. If this element is never displayed, then the test will fail.
    this.specificChildElement(index).waitForDisplayed();
    return this.specificChildElement(index).getText();
  }

  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }
    // this is an implicit wait
    this.h3Header.waitForDisplayed();
  }

    /**
   * Click the specific javascript alert button.
   * @param {Number} index the index of the element
   */
  clickJavaSCriptAlertButton(index) {
    this.javaScriptAlertButton(index).waitForDisplayed()
    this.javaScriptAlertButton(index).click()
  }

  clickDropdownMenu() {
    this.dropdownMenu.waitForDisplayed()
    this.dropdownMenu.click()
  }

  clickDropdownMenuOption1() {
    this.dropdownMenuOption1.waitForDisplayed()
    this.dropdownMenuOption1.click()
  }

  clickDropdownMenuOption2() {
    this.dropdownMenuOption2.waitForDisplayed()
    this.dropdownMenuOption2.click()
  }

  //#endregion
}
// export the module, so that the class is accessable by our tests.
module.exports = new Internet();
