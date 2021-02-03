const { assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe('Wait for exist', function() {
    it('should wait until the dele button exists', () => {
        browser.url(`${browser.options.baseUrl}add_remove_elements/`)
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist()
        assert.equal(true, internetPage.deleteButton(1).isExisting())
    })

    it('should click the delete button', () => {
        internetPage.clickDeleteButton(1)
        //internetPage.deleteButton(1).waitForExist(500, true) // waits half a second for the button to dissapear
        assert.equal(false, internetPage.deleteButton(1).isExisting())
    })
})