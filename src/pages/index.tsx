import React from 'react'
import { SEO } from '../features/seo'
import { IndexPageLayout } from '../features/layout'
import { Divider } from 'theme-ui'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { ArticlesList } from '../features/articles-list'
import { ArticleSummary } from '../features/articles-list/types'

const Headline = styled.div`
  text-align: center;
`

export const query = graphql`
  query MainPageQuery {
    fantasyArticles: allMdx(
      filter: { frontmatter: { tag: { eq: "fantasy-land" } } }
      sort: { fields: frontmatter___chapter, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          chapter
        }
        timeToRead
      }
    }
  }
`

type HomeProps = {
  data: {
    fantasyArticles: {
      nodes: ArticleSummary[]
    }
  }
}

const Home = ({
  data: {
    fantasyArticles: { nodes },
  },
}: HomeProps) => (
  <>
    <SEO />
    <IndexPageLayout>
      <Headline>
        <h1>house of keks</h1>
        <Divider />
      </Headline>
      <ArticlesList articles={nodes} />
    </IndexPageLayout>
  </>
)

export default Home
