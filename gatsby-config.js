module.exports = {
  siteMetadata: {
    keywords:
      'frontend, developer, blog, javascript, typescript, gatsby, personal, functional programming, fantasy land, algebraic javascript',
    description: `Personal blog with keks, peks and chebureks`,
    domain: 'kekpek.dev',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              withWebp: true,
              quality: 100,
              loading: `lazy`,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [`fonts`],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-webpack-size',
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_TAG_ID],
      },
    },
  ],
}
