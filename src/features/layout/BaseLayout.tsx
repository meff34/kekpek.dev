import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { useColorMode } from '../color-mode'
import { Footer } from './Footer'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  useColorMode()

  return (
    <Container>
      <div>{children}</div>
      <Footer />
    </Container>
  )
}
