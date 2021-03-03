import React from 'react'
import { ArticleSummary } from './types'
import styled from '@emotion/styled'
import { Link } from '../components'
import { Link as ExternalLink } from 'theme-ui'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const Item = styled.li`
  margin-bottom: 24px;
`

const Title = styled.h3`
  display: inline-block;
  margin: 0;
`

const Description = styled.h6`
  margin: 0;
`

type ListProps = {
  articles: ArticleSummary[]
}

export const ArticlesList = ({ articles }: ListProps) => (
  <>
    <h5>
      Перевод{' '}
      <ExternalLink target="_blank" rel="noreferrer" href="http://www.tomharding.me/fantasy-land/">
        серии статей
      </ExternalLink>{' '}
      про "алгебраический js"
    </h5>
    <List>
      {articles.map(({ id, frontmatter }) => (
        <Item key={id}>
          <Description>[Chapter #{frontmatter.chapter}]</Description>
          <Link to={frontmatter.slug}>
            <Title>{frontmatter.title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  </>
)
