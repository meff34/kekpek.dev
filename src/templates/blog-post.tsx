import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { SEO } from '../features/seo'
import { ArticleLayout } from '../features/layout'
import { Header } from '../features/header'

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        description
        title
      }
    }
  }
`

type Props = {
  data: {
    mdx: {
      id: string
      body: string
      frontmatter: {
        title: string
        description: string
      }
    }
  }
}

const BlogPostTemplate = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, description },
    },
  },
}: Props) => (
  <ArticleLayout>
    <SEO title={title} description={description} article />
    <Header />

    <article>
      <MDXRenderer>{body}</MDXRenderer>
    </article>
  </ArticleLayout>
)

export default BlogPostTemplate
