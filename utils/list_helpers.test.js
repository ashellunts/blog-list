const listHelper = require('./list_helpers.js')

const listWithOneBlog = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    }
]
const listWithTwoBlog = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    },
    {
        _id: 'lsfdljksdfjklfdslkjsfda',
        title: 'Title FooBar',
        author: 'Author FooBar',
        url: 'http://foo.bar',
        likes: 7,
        __v: 0
    }
]

describe('favorite blog', () => {
    test('from empty list returns null', () => {
        const blogList = []
        const favoriteBlog = listHelper.favoriteBlog(blogList)
        expect(favoriteBlog).toBe(null)
    })
    test('happy path', () => {
        const favoriteBlog = listHelper.favoriteBlog(listWithTwoBlog)
        expect(favoriteBlog).toEqual({
            title: "Title FooBar",
            author: "Author FooBar",
            likes: 7
        })
    })
})

describe('total likes', () => {
    test('sum of likes of 2 blogs', () => {
        const result = listHelper.totalLikes(listWithTwoBlog)
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
