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
  
  module.exports = {
    dummy,
    totalLikes,
    blogWithMostLikes
  }

