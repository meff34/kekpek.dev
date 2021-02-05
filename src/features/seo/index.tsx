import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type Meta = JSX.IntrinsicElements['meta']

const getMeta = ({
  metaDescription,
  title,
  twitter,
}: {
  metaDescription: string
  title: string
  twitter: string
}): Meta[] => [
  {
    name: `description`,
    content: metaDescription,
  },
  {
    property: `og:title`,
    content: title,
  },
  {
    property: `og:description`,
    content: metaDescription,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    name: `twitter:card`,
    content: `summary`,
  },
  {
    name: `twitter:creator`,
    content: twitter,
  },
  {
    name: `twitter:title`,
    content: title,
  },
  {
    name: `twitter:description`,
    content: metaDescription,
  },
]

type SeoProps = {
  title?: string
}

export const SEO = ({ title = 'kekpek.dev' }: SeoProps) => {
  const {
    site: {
      siteMetadata: {
        description,
        social: { twitter },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  )

  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ru',
      }}
      title={title}
      meta={getMeta({
        metaDescription,
        title,
        twitter,
      })}
    />
  )
}
