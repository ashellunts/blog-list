const listHelper = require('./list_helpers.js')
const { listWithOneBlog, listWithTwoBlogs, listWithThreeBlogs } = require('./list_helpers.test.data')

describe('most likes', () => {
    test('from empty list returns null', () => {
        const mostBlogs = listHelper.mostLikes([])
        expect(mostBlogs).toBe(null)
    })
    test('1 blog', () => {
        const mostLikes = listHelper.mostLikes(listWithOneBlog)
        expect(mostLikes).toEqual({
            author: 'Edsger W. Dijkstra',
            likes: 5
        })
    })
    test('2 blogs', () => {
        const mostBlogs = listHelper.mostLikes(listWithTwoBlogs)
        expect(mostBlogs).toEqual({
            author: 'Author FooBar',
            likes: 7
        })
    })
    test('3 blogs', () => {
        const mostBlogs = listHelper.mostLikes(listWithThreeBlogs)
        expect(mostBlogs).toEqual({
            author: 'Author FooBar',
            likes: 9
        })
    })
})
