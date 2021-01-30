module.exports = {
  siteMetadata: {
    author: {
      name: `Ivan (yeah, that one)`,
    },
    description: `We make keks here`,
    social: {
      twitter: `meff34`,
      telegram: '@gorbunov_i',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
  ],
}
