import React from 'react'
import { useColorToggle } from '../color-mode'
import { Button } from './Button'

export const ColorModeButton = () => {
  const [isLightMode, toggle] = useColorToggle()

  return (
    <Button title="switch theme" onClick={toggle}>
      {isLightMode ? '🌚' : '🌝'}
    </Button>
  )
}
