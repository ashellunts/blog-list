const listHelper = require('./list_helpers.js')
const { listWithOneBlog, listWithTwoBlogs } = require('./list_helpers.test.data')

describe('total likes', () => {
    test('sum of likes of 2 blogs', () => {
        const result = listHelper.totalLikes(listWithTwoBlogs)
        expect(result).toBe(12)
    })
    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
    test('of empty list is zeio', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })
})
