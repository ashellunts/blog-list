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
    const blogsByAuthors = {}
    const mostBlogsAuthor = { author: blogList[0].author, blogs: 1 }
    for (const blog of blogList) {
        if (blogsByAuthors[blog.author] === undefined) {
            blogsByAuthors[blog.author] = 1
        } else {
            blogsByAuthors[blog.author] += 1
        }
        if (mostBlogsAuthor.blogs < blogsByAuthors[blog.author]) {
            mostBlogsAuthor.author = blog.author
            mostBlogsAuthor.blogs = blogsByAuthors[blog.author]
        }
    }
    return mostBlogsAuthor
}

module.exports = { totalLikes, favoriteBlog, mostBlogs }
