function dummy(blogList) {
    return 1
}

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

module.exports = { dummy, totalLikes, favoriteBlog }
