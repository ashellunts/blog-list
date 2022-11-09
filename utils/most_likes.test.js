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
const listWithTwoBlogs = [
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
const listWithThreeBlogs = [
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
    },
    {
        _id: 'lsfdljksdfjklfdslkjsfda',
        title: 'Title FooBar',
        author: 'Author FooBar',
        url: 'http://foo.bar',
        likes: 2,
        __v: 0
    }
]

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
