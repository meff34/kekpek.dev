import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'theme-ui'

const FooterWrap = styled.div`
  margin: 48px 0 24px;
  text-align: center;
`

export const Footer = () => (
  <FooterWrap>
    <Link href="https://t.me/kekpek_dev">@kekpek_dev</Link>
  </FooterWrap>
)
