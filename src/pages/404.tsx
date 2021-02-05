import React from 'react'
import { SEO } from '../features/seo'
import { IndexPageLayout } from '../features/layout'
import { Link as ThemeUILink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'

const Link = styled(ThemeUILink)<{ to: string }>`
  display: block;
  text-align: center;
  padding: 48px 12px;
  font-size: 32px;
`

const NotFound = () => (
  <>
    <SEO title="404: Not Found" />
    <IndexPageLayout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... so sad.</p>

      <Link as={GatsbyLink} to="/">
        back to ~/.
      </Link>
    </IndexPageLayout>
  </>
)

export default NotFound
