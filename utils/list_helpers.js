function dummy(blogList) {
    return 1
}

function totalLikes(blogList) {
    const reducer = (prevValue, curValue) => prevValue + curValue.likes

    return blogList.reduce(reducer, 0);
}

module.exports = { dummy, totalLikes }
