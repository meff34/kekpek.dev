const { makeApi } = require('./gatsby/api')
const { makePageCreators } = require('./gatsby/page-creators')

exports.createPages = async (gatsby) => {
  const api = makeApi(gatsby)
  const pages = makePageCreators(gatsby)

  const fantasyPosts = await api.getFantasyLandPosts()

  for (const fantasyPost of fantasyPosts) {
    pages.createBlogPost(fantasyPost)
  }

  const specialPost = await api.getPostBySlug('chat-faq')

  pages.createBlogPost(specialPost)
}
