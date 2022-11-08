const listHelper = require('./list_helpers.js')

test('dummy returns 1', () => {
    blogList = []
    expect(listHelper.dummy(blogList)).toBe(1)
})

describe('total likes', () => {
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
