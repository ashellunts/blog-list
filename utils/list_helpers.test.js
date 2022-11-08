const listHelper = require('./list_helpers.js')

test('dummy returns 1',()=>{

    blogList = []
    expect(listHelper.dummy(blogList)).toBe(1)

})
