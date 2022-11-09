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

function mostLikes(blogList) {
    if (blogList.length == 0)
        return null


    const authorsLikes = blogList.reduce((acc, blog) => {
        acc[blog.author] =
            acc[blog.author]
                ? acc[blog.author] += blog.likes
                : blog.likes;
        return acc;
    }, {});

    const authorsLikesSorted =
        Object
            .keys(authorsLikes)
            .map((key) => { return { author: key, likes: authorsLikes[key] } })
            .sort((a, b) => b.likes - a.likes);

    return {
        author: authorsLikesSorted[0].author,
        likes: authorsLikesSorted[0].likes
    }
}

module.exports = { totalLikes, favoriteBlog, mostBlogs, mostLikes }
