const { resolve } = require('path')

const blogPost = resolve(`./src/templates/blog-post.tsx`)

const makePageCreators = (gatsby) => ({
  createBlogPost: ({ id, slug }) => {
    gatsby.actions.createPage({
      path: slug,
      component: blogPost,
      context: {
        slug,
        id,
      },
    })
  },
})

module.exports = {
  makePageCreators,
}
