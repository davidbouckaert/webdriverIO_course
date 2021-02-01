const { assert } = require('chai')
const internetPage = require('../pages/internet.page')

describe('Switch to iframe', function () {
    it('should swith to the iframe', () => {
        browser.url(`${browser.options.baseUrl}iframe`)
        internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        browser.switchToFrame(internetPage.iframe)
        internetPage.sendTextToBody("This is the text in the iframe body.")
        assert.equal('This is the text in the iframe body.', internetPage.iframeBody.getText())
    })
})