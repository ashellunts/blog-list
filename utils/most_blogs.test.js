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
        likes: 7,
        __v: 0
    }
]
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
