const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const blogWithMostLikes = (blogs) => {
    if (!blogs || blogs.length === 0 ) {
        return null
    }

    return blogs.reduce((favorite, current) => {
        return current.likes > favorite.likes ? current : favorite
    }, blogs[0])
}

const authorWithMostBlogs = (blogs) => {
    console.log(blogs)
    if (blogs.length === 0 ) return null
        

    const countBlogs = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + 1
        return acc
    }, {})

    const topAuthor = Object.keys(countBlogs).reduce((a, b) =>
        countBlogs[a] > countBlogs[b] ? a : b
    )
    
    return {
        author: topAuthor,
        blogs: countBlogs[topAuthor]
    }
}

const mostLikes = (blogs) => {
    if (blogs.length === 0 ) return null

    const likeCount = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + blog.likes
        return acc
    }, {})

    const topAuthor = Object.keys(likeCount).reduce((a, b) => {
        return likeCount[a] > likeCount[b] ? a : b
    })

    return {
        author: topAuthor,
        likes: likeCount[topAuthor]
    }
}
  
  module.exports = {
    dummy,
    totalLikes,
    blogWithMostLikes,
    authorWithMostBlogs,
    mostLikes
  }

