const {assert} = require ('chai')
const internetPage = require('../pages/internet.page')

describe('Drag and drop', function () {
    it.skip('should drag column A to column B', () => {
        browser.url(`${browser.options.baseUrl}drag_and_drop`)
        internetPage.dragColumnAToColumnB()
        assert.equal('A', internetPage.columnBHeader.getText())
    })

    it('should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        internetPage.dragDraggableToDroppable()
        assert.equal('Dropped!', internetPage.droppableResult.getText())
    })
})