import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  title?: string
  description?: string
  article?: boolean
}

const useQuery = () =>
  useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            keywords
            description
            domain
          }
        }
        file(base: { eq: "mage.png" }) {
          childImageSharp {
            fixed(width: 384) {
              src
            }
          }
        }
      }
    `,
  )

export const SEO = ({ title: pageTitle, description: pageDescription, article }: SeoProps) => {
  const {
    site: {
      siteMetadata: { keywords, domain, description: generalDescription },
    },
    file: {
      childImageSharp: {
        fixed: { src: ogImage },
      },
    },
  } = useQuery()

  const title = pageTitle ? `${pageTitle} | ${domain}` : domain
  const metaDescription = pageDescription || generalDescription

  return (
    <Helmet htmlAttributes={{ lang: 'ru' }}>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={metaDescription} />

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`https://${domain}${ogImage}`} />
      <meta property="og:locale" content="ru_RU" />

      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
  )
}
