import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'theme-ui'

const FooterWrap = styled.div`
  margin: 48px 0 24px;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export const Footer = () => (
  <FooterWrap>
    <Link href="https://t.me/kekpek_dev" target="_blank" rel="noopener noreferrer">
      @kekpek_dev
    </Link>

    <Link href="/rss.xml" target="_blank" rel="noopener noreferrer">
      rss
    </Link>
  </FooterWrap>
)
