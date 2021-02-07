/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

const Wrap = styled.div`
  margin: 16px -16px;
  padding: 0 16px;
  overflow-x: auto;
`

export const Pre = ({ children }: { children: ReactNode }) => {
  return <Wrap sx={{ backgroundColor: 'muted' }}>{children}</Wrap>
}
