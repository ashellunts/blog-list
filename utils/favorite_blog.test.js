const listHelper = require('./list_helpers.js')
const { listWithTwoBlogs } = require('./list_helpers.test.data')

describe('favorite blog', () => {
    test('from empty list returns null', () => {
        const blogList = []
        const favoriteBlog = listHelper.favoriteBlog(blogList)
        expect(favoriteBlog).toBe(null)
    })
    test('happy path', () => {
        const favoriteBlog = listHelper.favoriteBlog(listWithTwoBlogs)
        expect(favoriteBlog).toEqual({
            title: "Title FooBar",
            author: "Author FooBar",
            likes: 7
        })
    })
})
