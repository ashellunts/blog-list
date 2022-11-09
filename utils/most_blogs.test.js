const listHelper = require('./list_helpers.js')
const { listWithOneBlog, listWithTwoBlogs, listWithThreeBlogs } = require('./list_helpers.test.data')

describe('most blogs', () => {
    test('from empty list returns null', () => {
        const blogList = []
        const mostBlogs = listHelper.mostBlogs(blogList)
        expect(mostBlogs).toBe(null)
    })
    test('1 blog', () => {
        const mostBlogs = listHelper.mostBlogs(listWithOneBlog)
        expect(mostBlogs).toEqual({
            author: 'Edsger W. Dijkstra',
            blogs: 1
        })
    })
    test('2 blogs', () => {
        const mostBlogs = listHelper.mostBlogs(listWithTwoBlogs)
        expect(mostBlogs).toEqual({
            author: 'Edsger W. Dijkstra',
            blogs: 1
        })
    })
    test('3 blogs', () => {
        const mostBlogs = listHelper.mostBlogs(listWithThreeBlogs)
        expect(mostBlogs).toEqual({
            author: 'Author FooBar',
            blogs: 2
        })
    })
})
