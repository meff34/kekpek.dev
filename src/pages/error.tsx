import React from 'react'
import { IndexPageLayout } from '../features/layout'
import { Button } from '../features/header/Button'

const NotFound = () => {
  const crashTheApp = () => {
    throw new Error('There is some shit happen here')
  }

  return (
    <>
      <IndexPageLayout>
        <h1>404: Not Found</h1>
        <Button title="crash" onClick={crashTheApp}>
          💥
        </Button>
      </IndexPageLayout>
    </>
  )
}

export default NotFound
