const { assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe('Wait for enabled', function() {
    it('should wait for the input field to be enabled', () =>{
        browser.url(`${browser.options.baseUrl}dynamic_controls`)
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled(4000)
        assert.equal(true, internetPage.inputEnabledField.isEnabled())
    })

    it('should wait for the input field to be disabled', () =>{
        internetPage.clickEnableButton()
        //internetPage.inputEnabledField.waitForEnabled(20000, true) //adding 'true' makes it doing the reverse. So, if the element is absent during 4000 ms = true -> not present for 4 seconds.
        browser.pause(4000)
        assert.equal(fasle, internetPage.inputEnabledField.isEnabled()) //we expect 'isEnabled' to be false.
    })
})