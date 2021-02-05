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
    }
  }
`

type Props = {
  data: {
    mdx: {
      id: string
      body: string
    }
  }
}

const BlogPostTemplate = ({ data }: Props) => (
  <ArticleLayout>
    <SEO />
    <Header />

    <article>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </article>
  </ArticleLayout>
)

export default BlogPostTemplate
