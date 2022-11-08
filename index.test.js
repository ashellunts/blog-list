const axios = require('axios')

const blog = {
    title: "Foobar blog",
    author: "BarFoo blog",
    url: "http://foo.bar",
    likes: 123
}

describe('all tests', () => {
    test('get all blogs', async () => {
        const response = await axios.get('http://localhost:3003/api/blogs')
        expect(response.status).toBe(200)

        const firstBlog = response.data[0]
        expect(blog).toEqual({
            title: firstBlog.title,
            author: firstBlog.author,
            url: firstBlog.url,
            likes: firstBlog.likes,
        })
    })

    test('create blog', async () => {
        const response = await axios.post('http://localhost:3003/api/blogs', blog)
        expect(response.status).toBe(201)

        const blogCreated = response.data
        expect(blogCreated._id).toBeDefined()
        expect(blog).toEqual({
            title: blogCreated.title,
            author: blogCreated.author,
            url: blogCreated.url,
            likes: blogCreated.likes,
        })
    })
})
