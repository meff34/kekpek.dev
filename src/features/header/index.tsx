import React from 'react'
import styled from '@emotion/styled'
import { ColorModeButton } from './ColorModeButton'
import { Link } from 'gatsby'
import { Button } from './Button'
import { useColorToggle } from '../color-mode'

const AppBar = styled.header<HeaderProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) => (props.home ? 'flex-end' : 'space-between')};
  align-items: center;
  padding: 12px 0 48px;
`

type HeaderProps = {
  home?: boolean
}

export const Header = ({ home }: HeaderProps) => {
  const [isLightMode] = useColorToggle()

  return (
    <AppBar home={home}>
      {!home && (
        <Link to="/">
          <Button title="home">{isLightMode ? '🏠' : '🛏'}</Button>
        </Link>
      )}
      <ColorModeButton />
    </AppBar>
  )
}
