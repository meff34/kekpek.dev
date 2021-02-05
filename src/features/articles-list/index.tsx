import React from 'react'
import { ArticleSummary } from './types'
import styled from '@emotion/styled'
import { Link } from '../components'

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
  padding: 12px 16px;
  margin-bottom: 16px;
`

const Title = styled.h3`
  margin: 0 0 16px;
`

const Description = styled.h6`
  margin-top: 0;
`

type ListProps = {
  articles: ArticleSummary[]
}

export const ArticlesList = ({ articles }: ListProps) => (
  <List>
    {articles.map(({ id, frontmatter, timeToRead }) => (
      <Item key={id}>
        <Link to={frontmatter.slug}>
          <Title>{frontmatter.title}</Title>
        </Link>
        <Description>
          [Chapter #{frontmatter.chapter}], {timeToRead} min.
        </Description>
      </Item>
    ))}
  </List>
)
