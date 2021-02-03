const { assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe('Wait until', function () {
    it('should wait until the buttontext changes to add', () =>{
        browser.url(`${browser.options.baseUrl}dynamic_controls`)
        internetPage.clickPageButton()
        browser.waitUntil(() => {
            return internetPage.pageButton.getText() === 'Add' // wait until the text of this web obj is changed to 'add'.
        }, 6000, 'Expect button text to change' ) // this is the error msg if the waituntil should fail.
        assert.equal('Add', internetPage.pageButton.getText())
    })

    it('should wait until the buttontext changes to remove', () =>{
        internetPage.clickPageButton()
        browser.waitUntil(() => {
            return internetPage.pageButton.getText() === 'Remove' // wait until the text of this web obj is changed to 'add'.
        }, 6000, 'Expect button text to change' ) // this is the error msg if the waituntil should fail.
        assert.equal('Remove', internetPage.pageButton.getText())
    })
})