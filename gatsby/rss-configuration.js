const siteQuery = `
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

const feedQuery = `
  {
    allMdx(
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: {tag: {glob: "*"}}}
    ) {
      nodes {
        excerpt
        html
        frontmatter {
          slug
          title
          date
        }
      }
    }
  }
`

const getRssOptions = () => ({
  query: siteQuery,
  feeds: [
    {
      serialize: ({
        query: {
          site: {
            siteMetadata: { siteUrl },
          },
          allMdx: { nodes: articles },
        },
      }) =>
        articles.map(({ frontmatter: { slug, ...frontmatter }, excerpt, html }) => {
          const url = `${siteUrl}/${slug}`

          return {
            ...frontmatter,
            description: excerpt,
            url: url,
            guid: url,
            custom_elements: [{ 'content:encoded': html }],
          }
        }),
      query: feedQuery,
      output: '/rss.xml',
      title: 'kekpek.dev RSS Feed',
    },
  ],
})

module.exports = { getRssOptions }
