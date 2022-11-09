var _ = require('lodash')

function totalLikes(blogList) {
    const reducer = (prevValue, curValue) => prevValue + curValue.likes

    return blogList.reduce(reducer, 0);
}

function favoriteBlog(blogList) {
    if (blogList.length == 0) {
        return null
    }
    blogList.sort((a, b) => b.likes - a.likes)
    return {
        likes: blogList[0].likes,
        author: blogList[0].author,
        title: blogList[0].title
    }
}

function mostBlogs(blogList) {
    if (blogList.length == 0) {
        return null
    }
    const mostBlogsAuthor = { author: blogList[0].author, blogs: 1 }
    const blogsCountByAuthor = _.countBy(blogList, 'author')
    for (const [author, blogs] of Object.entries(blogsCountByAuthor)) {
        if (mostBlogsAuthor.blogs < blogs) {
            mostBlogsAuthor.author = author
            mostBlogsAuthor.blogs = blogs
        }
    }
    return mostBlogsAuthor
}

module.exports = { totalLikes, favoriteBlog, mostBlogs }
