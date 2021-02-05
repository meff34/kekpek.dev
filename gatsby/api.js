const { fetch } = require('./gatsbyTransport')

const makeApi = (gatsby) => ({
  getPostBySlug: async (frontmatterSlug) => {
    const {
      post: {
        id,
        frontmatter: { slug },
      },
    } = await fetch(
      `
      {
        post: mdx(frontmatter: { slug: { eq: "${frontmatterSlug}" } }) {
          id
          frontmatter {
            slug
          }
        }
      }
    `,
      `Failed to extract blog post`,
      gatsby,
    )

    return { id, slug }
  },
  getFantasyLandPosts: async () => {
    const {
      fantasyArticles: { nodes },
    } = await fetch(
      `
      query FantasyLandPosts {
        fantasyArticles: allMdx(
          filter: { frontmatter: { tag: { eq: "fantasy-land" } } }
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `,
      `Failed to extract blog post`,
      gatsby,
    )

    return nodes.map((node) => ({
      id: node.id,
      slug: node.frontmatter.slug,
    }))
  },
})

module.exports = {
  makeApi,
}
