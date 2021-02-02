const internetPage = require("../pages/internet.page")

describe('JavaScript Alerts', function() {
    it('should get text of alert',() => {
        browser.url(`${browser.options.baseUrl}javascript_alerts`)
        internetPage.clickJavaSCriptAlertButton(1)
        assert.equal('I am a JS Alert', browser.getAlertText())
    })

    it('should get text of confirm',() => {
        internetPage.clickJavaSCriptAlertButton(2)
        assert.equal('I am a JS Confirm', browser.getAlertText())
    })

    it('should get text of prompt',() => {
        internetPage.clickJavaSCriptAlertButton(3)
        assert.equal('I am a JS prompt', browser.getAlertText())
    })

    it('should accept confirm',() => {
        internetPage.clickJavaSCriptAlertButton(2)
        browser.acceptAlert()
        assert.equal('You clicked: Ok', internetPage.getResultText())
    })

    it('should cancel confirm',() => {
        internetPage.clickJavaSCriptAlertButton(2)
        browser.dismissAlert()
        assert.equal('You clicked: Cancel', internetPage.getResultText())
    })

    it('should accept prompt text',() => {
        internetPage.clickJavaSCriptAlertButton(3)
        browser.sendAlertText('Test')
        browser.acceptAlert()
        assert.equal('You entered: Test', internetPage.getResultText())
    })
})